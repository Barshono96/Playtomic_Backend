import { Router } from 'express';
import { createBooking, getBookings } from '../controllers/bookingController';

const router = Router();

router.post('/bookings/:userId', createBooking);
router.get('/bookings/:userid', getBookings);

export default router;