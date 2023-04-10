const router = express.Router();
import express from 'express';
import { getAllDiscsWithSellers, postBid, postDisc } from '../controllers/discController.js';

router.post('/', postDisc);
router.get('/', getAllDiscsWithSellers);
router.post('/bid', postBid);

export default router;