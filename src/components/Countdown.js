import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(eventDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return null; // Event has passed
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval
  }, []);

  return (
    <div>
      {timeLeft ? (
        <div className='countdown-container'>
          <h1>Wedding Countdown</h1>
          <p>{timeLeft.days} Days, {timeLeft.hours} Hours, {timeLeft.minutes} Minutes, {timeLeft.seconds} Seconds </p>
        </div>
      ) : (
        <h11>The event has started!</h11>
      )}
    </div>
  );
};

export default Countdown;
