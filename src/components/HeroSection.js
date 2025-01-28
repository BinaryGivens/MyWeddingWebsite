import React from 'react';
import '../App.css';
import './HeroSection.css';
import Countdown from './Countdown';
import heroVideo from '../../src/assets/hero.mp4';

function HeroSection() {
  const eventDate = '2025-07-21T00:00:00';

  return (
    <div className="wedding-header">
      <div className="text-container">
        <h1>The Wedding of</h1>
        <p>Jelina & Markiece</p>
        <p1>July 21st, 2025</p1>
      </div>
      <div className="header-countdown">
          <Countdown eventDate={eventDate} />
        </div>
      <div className="video-wrapper">
        <video src={heroVideo} autoPlay loop muted />
      </div>
    </div>
  );
}

export default HeroSection;
