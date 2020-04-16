const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  appTime: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  workType: {
    type: String,
    required: true
  },
  timeRequested: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("car_shops", BookingSchema);
