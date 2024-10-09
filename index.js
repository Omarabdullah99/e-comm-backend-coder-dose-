const express= require('express')
const server= express()
const mongoose= require('mongoose')

const MONGODB_URL="mongodb+srv://omarabdullah917303:OaiCIAOPo3NKJgN6@e-commerce-backend-oct2.jlnsq.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce-backend-oct24"

main().catch(err => console.log(err))
async function main(){
    await mongoose.connect(MONGODB_URL)
    console.log('database connected')
} 
server.get('/', (req,res)=>{
    res.json({staus:"success"})
})

server.listen(8000,()=>{
    console.log('server is running port 8000')
})

//omarabdullah917303 password:OaiCIAOPo3NKJgN6

//mongodb+srv://omarabdullah917303:<db_password>@e-commerce-backend-oct2.jlnsq.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce-backend-oct24