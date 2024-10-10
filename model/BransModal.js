const mongoose= require('mongoose')
const {Schema}=mongoose

const BrandsSchema=new Schema({
    label:{type:String, required:true, unique:true},
    value:{type:String, required:true, unique:true}
})

const virtual= BrandsSchema.virtual('id')
virtual.get(function(){
    return this._id
})

BrandsSchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret) {delete ret._id}
})

exports.BrandsModel= mongoose.model('Brands',BrandsSchema)