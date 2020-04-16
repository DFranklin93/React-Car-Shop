import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="page home" id="home">
      <div className="container">
        <img
          src={"../assets/logo.png"}
          width="250"
          height="250"
          alt="Logo"
          className="logo"
        />
      </div>
    </div>
  );
};

export default Home;
