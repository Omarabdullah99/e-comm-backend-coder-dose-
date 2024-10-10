const { BrandsModel } = require("../model/BransModal")

exports.createBrand=async(req,res)=>{
    const brand= new BrandsModel(req.body)
    try {
        const doc= await brand.save()
        res.status(201).json(doc)
        
    } catch (err) {
        res.status(400).json(err)
    }
}

exports.fetchBrands=async(req,res)=>{
    try {
        const brands= await BrandsModel.find({}).exec()
        res.status(200).json(brands)
    } catch (err) {
        res.status(400).json(err)
    }
}