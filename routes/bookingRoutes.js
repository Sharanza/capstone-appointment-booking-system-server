const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");

// gets all available bookings
router.get("/available", async (req, res) => {
  try {
    const bookings = await Booking.find({ available: true });
    console.log(bookings);
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// creating a booking
router.post("/booking", async (req, res) => {
  // A request body is data sent by the client to my API.
  // A response body is the data my API sends to the client.
  const booking = new Booking({
    date: req.body.date,
    time: req.body.time,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    comments: req.body.comments,
  });

  try {
    const newBooking = await booking.save();
    // status 201 means sucessfully created an object usually used in post requests
    res.status(201).json(newBooking);
  } catch (err) {
    // status 400 means bad request - sent to client in a json format in an object error message
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
