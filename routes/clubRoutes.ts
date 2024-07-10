import { Router } from 'express';
import { createClub } from '../controllers/clubController';

const router = Router();

router.post('/clubs/:userId', createClub);

export default router;
