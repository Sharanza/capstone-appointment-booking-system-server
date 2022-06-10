const mongoose = require("mongoose");
// schema for the available model and the fields that it will have (data types etc)
const bookingSchema = new mongoose.Schema({
  day: {
    type: String,
  },
  month: {
    type: String,
  },
  time: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  comments: {
    type: String,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
