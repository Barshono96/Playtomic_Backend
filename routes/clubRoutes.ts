import express, { Request, Response } from 'express';
import { createClub } from '../queries/clubQueries';

const router = express.Router();

router.post('/create-club', async (req: Request, res: Response) => {
  const { userId, clubData } = req.body;

  try {
    const newClub = await createClub(userId, clubData);
    res.status(201).json({ club: newClub });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
});

export default router;
