import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "./CalendarComp";

import "./Booking.css";

const Booking = props => {
  const [bookings, setBookings] = useState();
  const getBookings = () => {
    setBookings("testing");
  };

  useEffect(() => {
    getBookings();
  });
  console.log(bookings);

  return (
    <div id="booking">
      <div className="container pb-2">
        <div
          className="container-header pb-4"
          style={{ paddingTop: "10vw !important" }}
        >
          <span id="serviceSpan">Booking</span>
        </div>
        <Calendar />
      </div>
    </div>
  );
};

export default Booking;
