

import express from 'express';
import { createBooking, getBookings } from '../controllers/bookingController';

const router = express.Router();

router.post('/bookings/:userId/:clubId/:courtId', createBooking);
router.get('/bookings/:userId/:clubId/:courtId', getBookings);

export default router;
