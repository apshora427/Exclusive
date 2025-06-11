import React, { useState, useEffect } from 'react';

const Clock = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className=" ml-[87px] flex space-x-8 text-center">
      {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, idx) => (
        <div key={idx}>
          <p className="text-sm font-medium text-gray-500">{unit}</p>
          <p className="text-3xl font-bold">
            {Object.values(timeLeft)[idx].toString().padStart(2, '0')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Clock;
