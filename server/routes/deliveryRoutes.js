const router = express.Router();
import express from 'express';
import { confirmPurchase } from '../controllers/deliveryController.js';

router.post('/confirmPurchase', confirmPurchase);



export default router;