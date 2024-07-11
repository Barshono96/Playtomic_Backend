import { Router } from 'express';
import { createClub, getClub } from '../controllers/clubController';

const router = Router();

router.get('/clubs/:userId', getClub);
router.post('/clubs/:userId', createClub);

export default router;
