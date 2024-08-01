import { Request, Response } from 'express';
import Booking from '../models/bookingModel';
import Court from '../models/courtModel';
import Club from '../models/clubModel';
import User from '../models/userModel';

// Create a new booking
const createBooking = async (req: Request, res: Response) => {
  const { userId, clubId, courtId } = req.params;
  const { date, time, duration, playerCount } = req.body;

  try {
    // Check for existing bookings that conflict with the new booking
    const existingBooking = await Booking.findOne({
      where: {
        courtid: courtId,
        date,
        time,
        duration
      }
    });

    if (existingBooking) {
      return res.status(400).json({ message: 'This court is already booked at the selected time and duration.' });
    }

    // Create the new booking
    const newBooking = await Booking.create({
      userid: userId,
      clubid: clubId,
      courtid: courtId,
      date,
      time,
      duration,
      playerCount
    });

    res.status(201).json(newBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all bookings for a specific user, club, and court
const getBookings = async (req: Request, res: Response) => {
  const { userId, clubId, courtId } = req.params;

  try {
    const bookings = await Booking.findAll({
      where: {
        userid: userId,
        clubid: clubId,
        courtid: courtId
      },
      include: [
        { model: User, as: 'user' },
        { model: Club, as: 'club' },
        { model: Court, as: 'court' }
      ]
    });

    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all bookings for a specific user
const getUserBookings = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const bookings = await Booking.findAll({
      where: {
        userid: userId,
      },
      include: [
        { model: User, as: 'user' },
        { model: Club, as: 'club' },
        { model: Court, as: 'court' }
      ]
    });

    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export { createBooking, getBookings, getUserBookings };




