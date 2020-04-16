import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Work from "./components/Work";
import About from "./components/About";
import Booking from "./components/Booking";

function App() {
  //  Cookie

  const cookieCreator = () => {
    const arr = "1234567890abcdefghijklmnopqrstuvwxyz";
    let value = "";
    for (var i = 12; i > 0; i--) {
      value += arr[Math.floor(Math.random() * arr.length)];
    }
    return value;
  };

  const cookieGetter = () => {
    let cookieSet;
    if (localStorage.length === 0 || localStorage.cookie === undefined) {
      cookieSet = false;
    } else {
      cookieSet = true;
    }
    return cookieSet;
  };

  const cookieSetter = value => {
    const currentTime = new Date();
    localStorage.setItem("time", currentTime);
    localStorage.setItem("cookie", value);
    console.log(localStorage);
  };

  const localCookie = () => {
    let cookieSet = cookieGetter();
    if (!cookieSet) {
      let value = cookieCreator();
      cookieSetter(value);
    }
  };

  localCookie();

  // Cookie

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Work />
      <Booking cookie={localStorage.cookie} />
    </div>
  );
}

export default App;
