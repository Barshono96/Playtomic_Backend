import { Request, Response } from 'express';
import User from '../models/userModel';
import Booking from '../models/bookingModel';
import Club from '../models/clubModel';
import Court from '../models/courtModel';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const {  clubid, courtid, time, slot } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const club = await Club.findByPk(clubid);
    if (!club) {
      return res.status(404).json({ message: 'Club not found' });
    }

    const court = await Court.findByPk(courtid);
    if (!court) {
      return res.status(404).json({ message: 'Court not found' });
    }

    const booking = await Booking.create({
      userid: userId,
      clubid,
      courtid,
      time,
      slot,
    });

    res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

export const getBookings = async (req: Request, res: Response) => {
  try {
    const { userid } = req.params;

    const bookings = await Booking.findAll({ where: { userid } });

    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error retrieving bookings:', error);
    res.status(500).json({ message: 'Error retrieving bookings', error });
  }
};
