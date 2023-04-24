const router = express.Router();
import express from 'express';
import { cancel, confirmParcel, confirmParcelSent, confirmPayment, confirmPurchase, getSellingCancel, giveRating, paymentSent, rating, removeCancel, sendAddress, sendPaymentDetails } from '../controllers/deliveryController.js';

router.post('/confirmPurchase', confirmPurchase);
router.post('/sendAddress', sendAddress);
router.post('/sendPaymentDetails', sendPaymentDetails);
router.post('/paymentSent', paymentSent);
router.post('/confirmPayment', confirmPayment);
router.post('/confirmParcelSent', confirmParcelSent);
router.post('/confirmParcel', confirmParcel);
router.post('/rating', rating);
router.post('/cancel', cancel);
router.get('/getSellingCancel/:userId', getSellingCancel);
router.post('/removeCancel', removeCancel);
router.post('/giveRating', giveRating);

export default router;