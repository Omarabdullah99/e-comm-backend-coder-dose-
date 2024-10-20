const { UserModel } = require("../model/UserModel")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = 'test';


exports.createUser = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({ email, password: hashedPassword, name });
        
        const result = await user.save();

        const token = jwt.sign({ email: result.email, id: result.id }, secret, { expiresIn: "72h" });

        res.status(201).json({ user: { id: result.id, email: result.email, name: result.name, role:result.role }, token });
    } catch (err) {
        res.status(400).json(err);
    }
};



exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ email: user.email, id: user.id }, secret, { expiresIn: "72h" });

        res.status(200).json({ user: { id: user.id, email: user.email, name: user.name, role:user.role }, token });
    } catch (err) {
        res.status(400).json(err);
    }
};