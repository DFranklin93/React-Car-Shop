import React from "react";
import ImageLightBox from "./ImageLightBox";

import "./Work.css";

function Work() {
  return (
    <div className="work" id="work">
      <div className="container pb-5">
        <div className="container-header">
          <span>Our Work</span>
          <p>A collection of cars we've renovated with passion</p>
        </div>

        <ImageLightBox />
      </div>
    </div>
  );
}

export default Work;
