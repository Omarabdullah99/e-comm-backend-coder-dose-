const { CategoryModal } = require("../model/CategoryModel")

exports.createCategory= async(req,res)=>{
    const category= new CategoryModal(req.body)
    try {
        const doc= await category.save()
        res.status(201).json(doc)
        
    } catch (err) {
        res.status(400).json(err)
        
    }
}

exports.fetchCategories=async(req,res)=>{
    try {
        const categories= await CategoryModal.find({}).exec()
        res.status(200).json(categories);
        
    } catch (err) {
        res.status(400).json(err);
        
    }

}