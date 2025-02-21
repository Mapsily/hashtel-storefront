"use client";

import React, { useState, useEffect } from "react";

const Timer = ({ color = "white", end = new Date() }) => {
  const calculateTimeLeft = () => {
    const difference = +end - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [end, timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval]) {
      timerComponents.push(
        <span className="flex flex-col items-center" key={interval}>
          <p className={`text-4xl bg-${color} p-3 w-fit`}>
            {timeLeft[interval]}
          </p>
          <p className="text-sm">
            {interval.charAt(0).toUpperCase() + interval.slice(1)}
          </p>
        </span>
      );
    }
  });

  return (
    <div>
      <p>Offer expires in:</p>
      <span className="mt-2 flex items-start gap-6">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <p className="text-primary">Few Seconds!</p>
        )}
      </span>
    </div>
  );
};

export default Timer;
