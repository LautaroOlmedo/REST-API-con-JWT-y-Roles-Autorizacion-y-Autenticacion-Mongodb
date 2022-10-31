import { Router } from "express";

import {signUp, signIn} from '../controllers/authController'

const authRoute = Router();

authRoute.post('/signin', signIn);
authRoute.post('/signup', signUp);

export default authRoute;