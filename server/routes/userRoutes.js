const router = express.Router();
import express from 'express';
import { checkEmail, signinController, signupController } from '../controllers/userController.js';

router.post('/login', signinController);
router.post('/checkEmail', checkEmail);
router.post('/register', signupController);

export default router;