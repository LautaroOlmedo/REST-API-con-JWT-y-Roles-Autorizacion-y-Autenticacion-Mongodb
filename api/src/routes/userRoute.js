import { Router } from "express";
import {getAllUsers, getUserById, createUser, updateUser, deleteUser} from '../controllers/userController.js';
import { authJwt } from "../middlewares";
const userRoute = Router();

userRoute.get('/', getAllUsers);
userRoute.get('/:id', getUserById);
userRoute.post('/', [authJwt.verifyToken, authJwt.verifyModerator], createUser);
userRoute.put('/:userId', [authJwt.verifyToken, authJwt.verifyModerator], updateUser);
userRoute.delete('/:userId', [authJwt.verifyToken, authJwt.verifyAdmin], deleteUser);

export default userRoute;

// {
	
// 	"username": "joelito",
// 	"email": "joelitobaberito77@gmail.com",
// 	"password": "password123"
	
	
// }