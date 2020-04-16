import React, { Component } from "react";
import Calendar from "react-calendar";

import CalendarModal from "./CalendarModal";

export default class CalendarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      day: ""
    };
  }

  componentDidMount() {
    let days = document.getElementsByClassName(
      "react-calendar__month-view__days__day"
    );
    for (let i = 0; i < days.length; i++) {
      days[i].setAttribute("data-toggle", "modal");
      days[i].setAttribute("data-target", "#schedulerModal");
    }
  }

  UNSAFE_componentWillUpdate() {
    let days = document.getElementsByClassName(
      "react-calendar__month-view__days__day"
    );
    for (let i = 0; i < days.length; i++) {
      days[i].setAttribute("data-toggle", "modal");
      days[i].setAttribute("data-target", "#schedulerModal");
    }
  }

  onChange = async date => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.setState({ date })), 1);
    });
    await promise;
    this.setState({ day: date.toDateString() });
  };

  render() {
    return (
      <div className="pt-3 pb-3">
        <Calendar onChange={this.onChange} value={this.state.date} />
        <CalendarModal date={this.state.day} />
      </div>
    );
  }
}
