const express= require('express')
const server= express()
const mongoose= require('mongoose')
const ProductRoute= require('./routes/ProductRoute')
const CategoryRoute= require('./routes/CategoryRouter')
const BrandsRoute= require('./routes/BransRoute')
const AuthRoute= require('./routes/AuthRoute')
const UserRoute= require('./routes/UserRoute')
const CartRoute= require('./routes/CartRoute')
const OrderRoute= require('./routes/OrderRoute')
const cors= require('cors')
require('dotenv').config()

const PORT= process.env.PORT || 8000

//middleware
server.use(express.json())
server.use(cors({
    origin: 'https://omar-store303.netlify.app', // সব রিকোয়েস্ট অনুমোদিত হবে
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['X-Total-Count']
}))


//router
server.use('/products', ProductRoute.router)
server.use('/category', CategoryRoute.router)
server.use('/brands', BrandsRoute.router)
server.use('/auth',AuthRoute.router)
server.use('/user',UserRoute.router)
server.use('/cart',CartRoute.router)
server.use('/order', OrderRoute.router)




const MONGODB_URL="mongodb+srv://omarabdullah917303:OaiCIAOPo3NKJgN6@e-commerce-backend-oct2.jlnsq.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce-backend-oct24"
main().catch(err => console.log(err))
async function main(){
    await mongoose.connect(MONGODB_URL)
    console.log('database connected')
} 
server.get('/', (req,res)=>{
    res.json({staus:"success update"})
})



server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

//omarabdullah917303 password:OaiCIAOPo3NKJgN6

//mongodb+srv://omarabdullah917303:<db_password>@e-commerce-backend-oct2.jlnsq.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce-backend-oct24