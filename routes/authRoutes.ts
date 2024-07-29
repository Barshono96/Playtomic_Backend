import { Router } from 'express';
import { signup } from '../controllers/authController';
import { login } from '../controllers/authController';
import { getUser, updateUser } from '../controllers/authController';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);

router.get('/users/:userId', getUser);
router.put('/users/:userId', updateUser);

export default router;
