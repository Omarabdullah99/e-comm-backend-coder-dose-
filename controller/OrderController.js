const { CartModel } = require("../model/CartModel");
const { OrderModel } = require("../model/OrderModel");
const { ProductModel } = require("../model/ProductModel");

exports.createOrder = async (req, res) => {
  const order = new OrderModel(req.body);
  // console.log("first order for req.body", order);
  // here we have to update stocks;
  for (let item of order.items) {
    let product = await ProductModel.findOne({ _id: item.product.id });
    product.$inc("stock", -1 * item.quantity);
    // for optimum performance we should make inventory outside of product.
    await product.save();
  }

  try {
    const doc = await order.save();
    // অর্ডার সফল হলে, কার্ট খালি করা
    await CartModel.deleteMany({ user: order.user });

    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.fetchOrderByuser=async(req,res)=>{
    const {id}= req.params
    try {
        const doc= await OrderModel.find({user: id})
        res.status(200).json(doc)
        
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.fetchAllOrders=async(req,res)=>{
  //pagination= {_page:1, _limit=2}
  let query= OrderModel.find({})
  let totalOrdersQuery= OrderModel.find({})
  const totalDocs= await totalOrdersQuery.countDocuments().exec()
  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }
  try {
    const doc= await  query.exec()
    res.set("X-Total-Count",totalDocs)
    res.status(200).json(doc)
  } catch (error) {
    res.status(400).json(error)
    
  }
}

exports.updateOrder=async(req,res)=>{
  const {id}= req.params
  try {
    const doc= await OrderModel.findByIdAndUpdate(id, req.body, {new:true})
    res.status(200).json(doc)
  } catch (error) {
    res.status(400).json(error)
  }

}




