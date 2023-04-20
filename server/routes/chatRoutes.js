const router = express.Router();
import express from 'express';
import { getUserAllChats, messageRead, newMessage, singleChat } from '../controllers/chatController.js';

router.get('/:userId', getUserAllChats);
router.post('/newMessage', newMessage);
router.post('/messageRead', messageRead);
router.get('/singleChat/:user1/:user2', singleChat);

export default router;