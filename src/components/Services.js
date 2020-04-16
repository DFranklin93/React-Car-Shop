import React from "react";
import "./Services.css";

import givenServices from "../assets/Services.json";

const Services = () => {
  let serviceList = givenServices.map((service, k) => (
    <div className="service-box" key={k}>
      <div className="service-image">
        <img src={service.image} alt={service.serivceType} />
      </div>
      <div className="service-subheading">{service.serviceType}</div>
      <div className="service-body">{service.summary}</div>
    </div>
  ));

  return (
    <div className="services-background" id="services">
      <div className="container" id="serviceContainer">
        <div className="container-header">
          <span id="serviceSpan">Services</span>
          <div className="underline"></div>
          {serviceList}
        </div>
      </div>
    </div>
  );
};

export default Services;
