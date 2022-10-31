import { Router } from "express";
import {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct} from '../controllers/productController.js';
import { authJwt } from "../middlewares";
const productRoute = Router();

productRoute.get('/', getAllProducts);
productRoute.get('/:productId', getProductById);
productRoute.post('/', [authJwt.verifyToken, authJwt.verifyModerator], createProduct);
productRoute.put('/:productId',[authJwt.verifyToken, authJwt.verifyModerator], updateProduct);
productRoute.delete('/:productId', [authJwt.verifyToken, authJwt.verifyAdmin], deleteProduct);

export default productRoute;

// {
	
// 	"name": "Fibron",
// 	"price": 800,
// 	"category": "laptops",
// 	"imgURL": "https://http2.mlstatic.com/D_NQ_NP_893478-MLA42454445507_072020-O.webp"
	
	
// }