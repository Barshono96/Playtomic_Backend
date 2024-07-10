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

    const existingClub = await Club.findOne({ where: { userid: userId } });

    if (existingClub) {
      return res.status(400).json({ message: 'User already has a club' });
    }

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
