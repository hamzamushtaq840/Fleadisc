const router = express.Router();
import express from 'express';
import { signinController, signupController } from '../controllers/userController.js';

router.post('/register', signupController);
router.post('/login', signinController);

export default router;