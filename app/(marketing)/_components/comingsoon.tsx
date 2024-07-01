"use client"
import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeLeft(): TimeLeft {
    const targetDate = new Date('June 28, 2024 00:00:00 GMT');
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  return (
    <div className="relative flex flex-col items-center justify-center gap-y-2 px-4 py-2.5 sm:px-6">
      <div className="flex flex-col items-center gap-y-2 text-center">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">Plotix Beta Launch ⌛</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Coming Soon!
        </p>
      </div>
      <div className="flex justify-center items-center space-x-2 text-xs sm:text-sm font-mono">
        {/* <span className="border border-gray-300 rounded-md px-1 sm:px-2">{timeLeft.days}</span>{" "}days
        <span className="border border-gray-300 rounded-md px-1 sm:px-2">{timeLeft.hours}</span>{" "}hours
        <span className="border border-gray-300 rounded-md px-1 sm:px-2">{timeLeft.minutes}</span>{" "}minutes
        <span className="border border-gray-300 rounded-md px-1 sm:px-2">{timeLeft.seconds}</span>{" "}seconds */}
      </div>
    </div>
  );
}
