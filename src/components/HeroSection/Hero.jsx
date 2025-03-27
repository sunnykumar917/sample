import React from 'react';
import Button from '../Button/Button';  // Make sure the Button component exists
import './Hero.css';
import HeroVideo from '../../assets/videos/hero-desktop.mp4';

const Hero = () => {
  return (
    <div className="hero-section-wrapper">
      {/* Video element for background */}
      <video className="hero-video" autoPlay loop muted>
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content that overlays the video */}
      <div className="hero-section">
        <div className="hero-heading">
          Crafted for the
          <br />
          Creditworthy
        </div>
        <div className="hero-subheading">
          CRED is a members-only club that enables the
          <br />
          Trustworthy to make financial progress
        </div>
        <Button buttonText="Download CRED" />
      </div>
    </div>
  );
};

export default Hero;
