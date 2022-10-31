import Product from '../models/Product.js'

// -------------------- GET ALL --------------------

export const getAllProducts = async (req, res) =>{
    try{

        const products = await Product.find();
        products.length ? res.status(200).json({message: 'All products', products: products}) : res.status(404).json({message: 'products not find'});
        
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'server not found /GET', error: e});
    };
};

// -------------------- GET BY ID --------------------

export const getProductById = async (req, res) =>{
    try{
        
        if(!req.params.productId){
            return res.status(404).json({message: 'id is required'});
        };
        const product = await Product.findById(req.params.productId);
        product.name ? res.status(200).json({message: 'product find satifactory', product: product}) : res.satatus(404).json({message: 'product not find'});
        
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'server not found /GET:ID', error: e});
    };
};

// -------------------- CREATE --------------------

export const createProduct = async (req, res) =>{
    try{

        const {name, category, price, imgURL} = req.body
        if(!name || !category || !price){
            return res.status(404).json({message: 'name, category and prince is required'});
        };
        const newProduct = new Product({name, category, price, imgURL});
        const productSaved = await newProduct.save();

        productSaved ? res.status(201).json({message: 'product created', product: productSaved}) : res.status(404).json({message: 'product not created'});
        
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'server not found /POST', error: e});
    };
};

// -------------------- UPDATE --------------------

export const updateProduct = async (req, res) =>{
    try{

        if(!req.params.productId){
            return res.status(404).json({message: 'id is required'});
        };
        const updateProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {new: true});
        updateProduct.name ? res.status(201).json({message: 'product update', product: updateProduct}) : res.status(404).json({message: 'product not find or product not updated'});
        
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'server not found /PUT', error: e});
    };
};

// -------------------- DELETE --------------------

export const deleteProduct = async (req, res) =>{
    try{
        if(!req.params.productId){
            return res.status(404).json({message: 'id is required'});
        };
        await Product.findByIdAndDelete(req.params.productId);
        res.status(204).json();
        
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'server not found /DELETE', error: e});
    };
};

// -------------------- DDISABLE --------------------

export const disableProduct = async (req, res) =>{
    try{
        if(!req.params.productId){
            return res.status(404).json({message: 'id is required'});
        };
        await Product.findByIdAndDelete(req.params.productId);
        res.status(204).json();
        
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'server not found /DELETE', error: e});
    };
};