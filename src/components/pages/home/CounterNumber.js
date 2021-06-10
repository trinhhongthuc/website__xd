import React, { useEffect } from "react";

const CounterNumber = ({ end }) => {
  const animateNumber = (finalNumber, delay, startNumber = 0, callback) => {
    let currentNumber = startNumber;
    const interval = window.setInterval(updateNumber, delay);
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval);
      } else {
        currentNumber++;
      }
      callback(currentNumber);
    }
  };

  useEffect(() => {
    animateNumber(end, 50, 0, function (number) {
      const formattedNumber = number.toLocaleString();
      document.getElementById("counter").innerText = formattedNumber;
    });
  }, []);
  return <div id="counter"></div>;
};

export default CounterNumber;
