const express = require("express");
const router = express.Router();
const Booked = require("../models/booked");

// gets all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booked.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// creating a booking
router.post("/booked", async (req, res) => {
  // A request body is data sent by the client to my API.
  // A response body is the data my API sends to the client.
  const booked = new Booked({
    day: req.body.day,
    month: req.body.month,
    time: req.body.time,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    comments: req.body.comments,
  });

  try {
    const newBooking = await booked.save();
    // status 201 means sucessfully created an object usually used in post requests
    res.status(201).json(newBooking);
  } catch (err) {
    // status 400 means bad request - sent to client in a json format in an object error message
    res.status(400).json({ message: err.message });
  }
});

// deleting a booking
router.delete("/:id", async (req, res) => {
  // delete requested object

  try {
    await res.Booked.remove();
    res.json({ message: "removed booking" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
