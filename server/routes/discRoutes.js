const router = express.Router();
import express from 'express';
import { buyDisc, getActiveDiscs, getActiveDiscs2, getAllDiscsWithSellers, getDiscBids, getFinishedDiscs, postBid, postDisc } from '../controllers/discController.js';

router.post('/', postDisc);
router.get('/', getAllDiscsWithSellers);
router.post('/bid', postBid);
router.post('/buy', buyDisc);
router.get('/getBids/:discId/bids', getDiscBids);
router.get('/getActiveDiscs/:userId', getActiveDiscs);
router.get('/getActiveDiscs2/:userId/:userCurrency', getActiveDiscs2);
router.get('/getFinishedDiscs/:userId', getFinishedDiscs);

export default router;