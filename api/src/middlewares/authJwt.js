import jwt from 'jsonwebtoken';
import User from '../models/User';
import Role from '../models/Role';

export const verifyToken = async(req, res, next) =>{
    try {
        const token = req.headers["x-acces-token"];
        if(!token) return res.status(401).json({message: 'not token provided'});
        const decoded = jwt.verify(token, 'hi');
        req.userId = decoded.id
  
        const user = await User.findById( req.userId, {password: 0});
        if(!user) return res.status(404).json({message: 'no user found'});
        next(); 
    }catch(e){
        return res.status(401).json({message: 'unauthorized'});
    };
};

export const verifyModerator = async(req, res, next) =>{
    try {
        const user = await User.findById(req.userId);
        const roles = await Role.find({_id: {$in: user.roles}});
        console.log(roles);

        for(let i = 0; i < roles.length; i++){
            if(roles[i].name === 'moderator'){
                next();
                return;
            };
        };
        return res.status(403).json({message: 'Require Moderator rol'});   
    }catch(e) {
      console.log(e);
      res.status(500).json({message: 'Verification error: Moderator'})  
    };
};

export const verifyAdmin = async(req, res, next) =>{
    try {
        const user = await User.findById(req.userId);
        const roles = await Role.find({_id: {$in: user.roles}});
        console.log(roles);

        for(let i = 0; i < roles.length; i++){
            if(roles[i].name === 'admin'){
                next();
                return;
            };
        };
        return res.status(403).json({message: 'Require Admin rol'});   
    }catch(e) {
      console.log(e);
      res.status(500).json({message: 'Verification error: Admin'})  
    };
};