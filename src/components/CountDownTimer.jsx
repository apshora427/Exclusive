import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getTimeRemaining() {
    const target = new Date().getTime() + 5 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 35 * 1000; // 5 days 23 hrs 59 mins 35 secs
    const now = new Date().getTime();
    const difference = target - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex  items-center gap-4 ">
      {timeUnits.map((unit, index) => (
        <div
          key={index}
          className="bg-white text-black rounded-full w-20 h-20 flex flex-col justify-center items-center font-bold"
        >
          <span className="text-xl">{String(unit.value).padStart(2, "0")}</span>
          <span className="text-xs">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
