import User from '../models/User.js'
// -------------------- GET ALL USERS --------------------

export const getAllUsers = async (req, res) =>{
    try{
        const allUsers = await User.find();
        allUsers ? res.status(200).json(allUsers) : res.satatus(404).json({message: 'canot found users'});
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'server not found /GET', error: e});
    };
};

// -------------------- GET USER BY ID --------------------

export const getUserById = async (req, res) =>{
    try{
        const {id} = req.params;
        if(!id) return res.status(400).json({message: 'ID is required'});

        const user = await User.findById(id).populate('roles');
        let roles = []
        for(let i = 0; i < user.roles.length; i++){
            roles.push(user.roles[i].name)
        }
        user ? res.status(200).json({
            id: user._id,
            username: user.username,
            email: user.email,
            roles: roles,
            active: user.active
        }) :
        res.status(401).json({message: 'user not found'})
        
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'server not found /GET:ID', error: e});
    };
};

// -------------------- CREATE USER --------------------

export const createUser = async (req, res) =>{
    try{
        
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'server not found /POST', error: e});
    };
};

// -------------------- UPDATE USER --------------------

export const updateUser = async (req, res) =>{
    try{
        
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'server not found /PUT', error: e});
    };
};

// -------------------- DELETE USER --------------------

export const deleteUser = async (req, res) =>{
    try{
        
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'server not found /DELETE', error: e});
    };
};

// -------------------- DDISABLE USER --------------------

export const disableUser = async (req, res) =>{
    try{
        
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'server not found /DELETE', error: e});
    };
};

