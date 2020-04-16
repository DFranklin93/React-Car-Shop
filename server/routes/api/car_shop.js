const express = require("express");
const router = express.Router();

const Booking = require("../../models/Bookings");

//  @route GET api/products/test
// @description tests products route
// @access Public
router.get("/test", (req, res) => res.send("Testing route"));

// @route Get api/products
// @description Get all products
// @access Public
router.get("/", (req, res) => {
  // res.send("Base route working");
  Booking.find()
    .then(bookings => {
      res.json(bookings);
    })
    .catch(err =>
      res.status(404).json({ nobookingsfound: "No Bookings Found" })
    );
});

router.post("/", (req, res) => {
  const newBooking = new Booking({
    name: req.body.name,
    number: req.body.number
  });
  newBooking
    .save()
    .then(booking => res.json({ mesg: "Booking added" }))
    .catch(err => console.log(err));
});

module.exports = router;
