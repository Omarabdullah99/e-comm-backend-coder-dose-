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

//middleware
server.use(express.json())
server.use(cors({
    origin: 'http://localhost:5173', // এখানে ফ্রন্টএন্ড URL যোগ করো
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // যে HTTP মেথডগুলো ব্যবহার করছো সেগুলো এখানে যুক্ত করো
    allowedHeaders: ['Content-Type', 'Authorization'], // প্রয়োজনীয় হেডারগুলো যুক্ত করো
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
    res.json({staus:"success"})
})

server.get('/hello',(req,res)=>{
    res.json({status:'update nri'})
})

server.listen(8000,()=>{
    console.log('server is running port 8000')
})

//omarabdullah917303 password:OaiCIAOPo3NKJgN6

//mongodb+srv://omarabdullah917303:<db_password>@e-commerce-backend-oct2.jlnsq.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce-backend-oct24