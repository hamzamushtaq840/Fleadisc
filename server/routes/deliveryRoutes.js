const router = express.Router();
import express from 'express';
import { confirmPurchase, sendAddress, sendPaymentDetails } from '../controllers/deliveryController.js';

router.post('/confirmPurchase', confirmPurchase);
router.post('/sendAddress', sendAddress);
router.post('/sendPaymentDetails', sendPaymentDetails);

export default router;