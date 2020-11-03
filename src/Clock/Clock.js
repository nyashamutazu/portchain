import React, { useEffect, useState } from "react";
import "./Clock.css";

const Clock = () => {
  //  Creating a state for clock
  const [clock, setClock] = useState({
    variables: {
      seconds: "",
      oneMinute: {},
      fiveMinutes: {},
      oneHour: {},
      fiveHour: {}
    }
  });

  // use effect to update the state
  useEffect(() => {
    //   create an interval for every half second
    setInterval(() => {
      // Create new current date
      const date = new Date();

      //   set the current number of hours
      const hours = date.getHours();
      //   set the current number of minutes
      const minutes = date.getMinutes();
      //   set the current number of seconds
      const seconds = date.getSeconds();

      //   Create a variables container
      let variables = {
        //   Initialising seconds - if current second(s) are/is even set seconds to active else empty
        seconds: seconds % 2 ? "active" : "",
        oneMinute: {},
        fiveMinutes: {},
        oneHour: {},
        fiveHour: {}
      };

      //   Initialising five hour row through looping
      for (let i = 0; i < 4; i++) {
        variables.fiveHour[i] = i < parseInt(hours / 5) ? "active" : "";
      }

      //   Initialising one hour row through looping
      for (let i = 0; i < 4; i++) {
        variables.oneHour[i] = i < parseInt(hours % 5) ? "active" : "";
      }

      //   Initialising five minutes row through looping
      for (let i = 0; i < 11; i++) {
        variables.fiveMinutes[i] = i < parseInt(minutes / 5) ? "active" : "";
      }

      //   Initialising one minute row through looping
      for (let i = 0; i < 4; i++) {
        variables.oneMinute[i] = i < parseInt(minutes % 5) ? "active" : "";
      }

      //   Set current state - variable to clock
      setClock({ variables });
    }, 500);
  }, []);

  return (
    <div className="clock__container">
        <h1>Portchain coding test - Mengenlehreclock or Berlin Uhr</h1>
        <p>Nyasha Mutazu - contact@nyashamutazu.com</p>
        <br />
        <hr />
      <div className="clock__body">
        <div
          className={["clock__seconds", clock.variables.seconds].join(" ")}
        ></div>
      </div>
      <div className="clock__body">
        {/* Looping through the five hour object with active variables */}
        {Object.keys(clock.variables.fiveHour).map(i => {
          return (
            <div
              key={i}
              className={[
                "clock__five--hours",
                // If variable in object is active
                clock.variables.fiveHour[i]
              ].join(" ")}
            ></div>
          );
        })}
      </div>
      <div className="clock__body">
        {/* Looping through the one hour object with active variables */}
        {Object.keys(clock.variables.oneHour).map(i => {
          return (
            <div
              key={i}
              // If variable in object is active
              className={["clock__one--hour", clock.variables.oneHour[i]].join(
                " "
              )}
            ></div>
          );
        })}
      </div>
      <div className="clock__body">
        {/* Looping through the five minutes object with active variables */}
        {Object.keys(clock.variables.fiveMinutes).map((i, index) => {
          return (
            <div
              key={i}
              className={[
                "clock__five--minutes",
                // For every third div should display 'clock__five--minutes--3' class
                (index + 1) % 3 === 0 ? "clock__five--minutes--3" : "",
                // If variable in object is active
                clock.variables.fiveMinutes[i]
              ].join(" ")}
            ></div>
          );
        })}
      </div>
      <div className="clock__body">
        {/* Looping through the one minute object with active variables */}
        {Object.keys(clock.variables.oneMinute).map(i => {
          return (
            <div
              key={i}
              className={[
                "clock__one--minute",
                // If variable in object is active
                clock.variables.oneMinute[i]
              ].join(" ")}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Clock;
