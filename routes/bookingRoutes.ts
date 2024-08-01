import express from "express";
// import { createBooking, getBookings } from "../controllers/bookingController";
import { createBooking,getBookings,getUserBookings } from "../controllers/bookingController";


const router = express.Router();

router.post("/bookings/:userId/:clubId/:courtId", createBooking);
router.get("/bookings/:userId/:clubId/:courtId", getBookings);
// router.get("/bookings/conflicts/:clubId/:courtId", checkBookingConflict);

router.get("/bookings/user/:userId", getUserBookings);


export default router;
