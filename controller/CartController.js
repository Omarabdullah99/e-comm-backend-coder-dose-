const { CartModel } = require("../model/CartModel");

exports.addToCart = async (req, res) => {
    const cart = new CartModel(req.body);
    try {
      const doc = await cart.save();
      const result = await doc.populate('product');
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  exports.fetchCartByUserId= async(req,res)=>{
    const { user } = req.query;
  try {
    const cartItems = await CartModel.find({ user: user }).populate('product');
    res.status(200).json(cartItems);
  } catch (err) {
    res.status(400).json(err);
  }
  }

  exports.updateCart=async(req,res)=>{
    const {id}= req.params
    try {
      const updateCart= await CartModel.findByIdAndUpdate(id, req.body,{
        new:true
      })
      const result= await updateCart.populate('product')
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json(error)
    }
  }
  exports.deleteCart=async(req,res)=>{
    const {id}=req.params
    try {
      const deleteProduct= await CartModel.findByIdAndDelete(id)
      res.status(200).json(deleteProduct)
    } catch (error) {
      res.status(400).json(error)
      
    }
  }