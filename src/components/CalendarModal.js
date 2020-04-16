import React from "react";

import timeOfDay from "../assets/TimeOfDay.json";

const CalendarModal = props => {
  const timeSelector = async event => {
    let targeted = event.currentTarget;
    let promise = new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve(
            timeOfDay.available
              ? (timeOfDay.available = false)
              : (timeOfDay.available = true)
          ),
        1
      );
    });

    await promise;
    if (targeted.classList.value === "") {
      targeted.classList.add("bg-danger");
    } else {
      targeted.classList.remove("bg-danger");
    }
  };

  let scheduleLayout = timeOfDay.map((time, k) => (
    <tr
      className=""
      onClick={timeSelector}
      data-toggle="button"
      aria-pressed="false"
      key={k}
    >
      <th
        scope="row"
        style={{
          MozUserSelect: "none",
          WebkitUserSelect: "none",
          MsUserSelect: "none",
          OUserSelect: "none",
          userSelect: "none"
        }}
      >
        {time.time}
      </th>
    </tr>
  ));
  return (
    <div>
      <div
        className="modal fade"
        id="schedulerModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="schedulerModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="schedulerModalTitle">
                {props.date}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>{scheduleLayout}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
