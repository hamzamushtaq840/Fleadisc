const router = express.Router();
import express from 'express';
import { confirmParcel, confirmParcelSent, confirmPayment, confirmPurchase, paymentSent, sendAddress, sendPaymentDetails } from '../controllers/deliveryController.js';

router.post('/confirmPurchase', confirmPurchase);
router.post('/sendAddress', sendAddress);
router.post('/sendPaymentDetails', sendPaymentDetails);
router.post('/paymentSent', paymentSent);
router.post('/confirmPayment', confirmPayment);
router.post('/confirmParcelSent', confirmParcelSent);
router.post('/confirmParcel', confirmParcel);

export default router;