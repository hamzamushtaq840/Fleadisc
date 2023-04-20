const router = express.Router();
import express from 'express';
import { getUserAllChats } from '../controllers/chatController.js';

router.post('/:userId', getUserAllChats);

export default router;