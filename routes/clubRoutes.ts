import { Router } from 'express';
import { createClub, getClub, getAllClubs  } from '../controllers/clubController';

const router = Router();

// router.get('/users/:userId/clubs', getClub);
router.get('/clubs', getAllClubs); // New route to get all clubs
router.post('/users/:userId/clubs', createClub);


export default router;
