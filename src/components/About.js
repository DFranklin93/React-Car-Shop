import React from "react";

const About = () => {
  const shopName = "Car Shop Inc";
  return (
    <div className="container pt-2 pb-5" id="about">
      <div className="container-header">
        <span>{shopName}</span>
      </div>
      <div className="pt-4 text-center w-75 m-auto">
        <p>
          {shopName} is the leading Auto Repair Shop. Providing auto owners with
          quality, trained service, utilizing original equipment replacement
          parts, all with the highest level of service and satisfaction. We take
          pride in our neighborhood and strive to bestow a very personalized
          experience that can only be achieved with a sense of community.{" "}
        </p>
        <p>
          When you choose {shopName} for your vehicle’s needs, you can be sure
          your best interest is our top priority. From the moment you make that
          first call, to when you pick up after the scheduled repair or service,
          you can rest easy knowing that everything will be handled with the
          utmost precision, quality, and attention to detail.{" "}
        </p>
        <p>
          At {shopName}, we provide auto repair that can only be achieved with a
          specialist’s touch. We take pride in knowing that when it comes to
          your vehicle, we ARE the best choice. The BEST service at the BEST
          value. This guarantee, the {shopName} guarantee, is what has made us
          the fastest growing auto repair shop.
        </p>
      </div>
    </div>
  );
};

export default About;
