const { UserModel } = require("../model/UserModel")

exports.createUser=async(req,res)=>{
    // console.log(' req.body create user', req.body)
    const user= new UserModel(req.body)
    try {
        const doc= await user.save()
        res.status(201).json(doc)
    } catch (err) {
        res.status(400).json(err)
    }
}

exports.loginUser=async(req,res)=>{
    try {
        const user= await UserModel.findOne({email:req.body.email})
        // console.log('login user',user)
        if(!user){
            res.status(401).json({ message: 'no such user email' })
        }else if(user.password === req.body.password){
            res.status(200).json({id:user.id, email:user.email, name:user.name});
        }else{
            res.status(401).json({ message: 'invalid credentials' });
        }
        
    } catch (error) {
        res.status(400).json(err)
    }
}