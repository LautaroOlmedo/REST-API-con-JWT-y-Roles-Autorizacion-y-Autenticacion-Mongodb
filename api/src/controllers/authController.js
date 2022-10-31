import User from "../models/User.js";
import jwt from 'jsonwebtoken';
import Role from "../models/Role.js";
const {
    SECRET
} = process.env;



export const signUp  = async (req, res) =>{
    try{
        const {username, email, password, roles} = req.body;
        if(!username || !email || !password) return res.status(401).json({message: 'Username, email & password required'})
        const userFound = await User.findOne({email}).populate('roles');
        if(userFound !== null) return res.status(401).json({message: 'Email already used'});
        const newUser = new User({
            username,
            email,
            password: await User.encryptPassword(password)
        });
        if(roles){
            const foundRol = await Role.find({name: {$in: roles}});
            if(foundRol.length < 1) return res.status(400).json({message: 'Invalid rol'});
            newUser.roles = foundRol.map(role => role._id);
        }else{
            const rol = await Role.findOne({name: 'user'});
            newUser.roles = [rol._id];
        };
        const savedUser = await newUser.save();
        const token = jwt.sign({id: savedUser._id}, 'hi', {expiresIn: 86400});
        res.status(201).json({token: token, message: 'SignUp'});
        
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'server not found /POST', error: e});
    };
};

export const signIn = async (req, res) =>{
    try{
        const {email, password} = req.body;
        if(!email || !password) return res.status(401).json({message: 'Email & password required'});
        const userFound = await User.findOne({email}).populate('roles');
        if(!userFound) return res.status(401).json({message: 'User not found'});
        if(userFound.active === false) return res.status(401).json({message: 'User banned'})
        const matchPassword = await User.comparePassword(password, userFound.password);
        if(!matchPassword) return res.status(401).json({token: null, message: 'Invalid password'});
        //console.log(userFound);
        const token = jwt.sign({id: userFound._id,}, 'hi', {expiresIn: 86400});
        res.status(200).json({token: token, message: 'SignIn'});
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'server not found /POST', error: e});
    };
};