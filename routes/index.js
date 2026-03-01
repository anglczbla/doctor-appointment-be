import express from 'express';
import adminRouter from './adminRoute.js';
import doctorRouter from './doctorRoute.js';
import userRouter from './userRoute.js';

const router = express.Router();

router.use('/admin', adminRouter);
router.use('/doctor', doctorRouter);
router.use('/user', userRouter);

export default router;