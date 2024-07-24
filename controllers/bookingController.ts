// import { Request, Response } from 'express';
// import User from '../models/userModel';
// import Booking from '../models/bookingModel';
// import Club from '../models/clubModel';
// import Court from '../models/courtModel';

// export const createBooking = async (req: Request, res: Response) => {
//   try {
//     const { userId, clubId, courtId } = req.params;
//     const {time, slot } = req.body;

//     const user = await User.findByPk(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const club = await Club.findByPk(clubId);
//     if (!club) {
//       return res.status(404).json({ message: 'Club not found' });
//     }

//     const court = await Court.findByPk(courtId);
//     if (!court) {
//       return res.status(404).json({ message: 'Court not found' });
//     }

//     const booking = await Booking.create({
//       userid: userId,
//       clubid: clubId,
//       courtid: courtId,
//       time,
//       slot,
//     });

//     res.status(201).json(booking);
//   } catch (error) {
//     console.error('Error creating booking:', error);
//     res.status(500).json({ message: 'Error creating booking', error });
//   }
// };

// export const getBookings = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.params;

//     const bookings = await Booking.findAll({ where: { userId } });

//     res.status(200).json(bookings);
//   } catch (error) {
//     console.error('Error retrieving bookings:', error);
//     res.status(500).json({ message: 'Error retrieving bookings', error });
//   }
// };

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

export { createBooking, getBookings };
