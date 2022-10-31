import { Router } from 'express';

import userRoute from './userRoute';
import productRoute from './productRoute';
import authRoute from './authRoute';

const router = Router();

router.use('/api/user', userRoute);
router.use('/api/product', productRoute);
router.use('/api/auth', authRoute);

module.exports = router;

// http://localhost:3000/api/product
// http://localhost:3000/api/user