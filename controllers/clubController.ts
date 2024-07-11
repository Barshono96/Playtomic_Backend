import { Request, Response } from 'express';
import User from '../models/userModel';
import Club from '../models/clubModel';

export const createClub = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const { clubname, address, country, city } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const existingClub = await Club.findAll({ where: { userid: userId } });



    const club = await Club.create({
      userid: userId,
      clubname,
      address,
      country,
      city,
    });

    res.status(201).json(club);
  } catch (error) {
    res.status(500).json({ message: 'Error creating club', error });
  }
};

export const getClub = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const club = await Club.findAll({ where: { userid: userId } });

    if (!club) {
      return res.status(404).json({ message: 'Club not found' });
    }

    res.status(200).json(club);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving club', error });
  }
};
