const mongoose= require('mongoose')
const {Schema}= mongoose

const OrderSchema=new Schema({
    items:{type:[Schema.Types.Mixed], require:true},
    totalAmount: { type: Number },
    totalItems: { type: Number },
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    paymentMethod: { type: String, required: true},
    paymentStatus: { type: String, default: 'pending' },
    status: { type: String, default: 'pending' },
    selectedAddress: { type: Schema.Types.Mixed, required: true },
})

const virtual= OrderSchema.virtual('id')
virtual.get(function(){
    return this._id
})

OrderSchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret) {delete ret._id}
})

exports.OrderModel= mongoose.model('order',OrderSchema)