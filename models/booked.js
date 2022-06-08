const mongoose = require("mongoose");
// schema for the available model and the fields that it will have (data types etc)
const bookedSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Booked", bookedSchema);
