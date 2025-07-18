import React from 'react';
import './SplashScreen.css';
import animatedLogoLight from './assets/Animated logo light .mp4';
import animatedLogoDark from './assets/Animated logo dark.mp4';

const SplashScreen = ({ theme = 'light' }) =>{
  const videoSrc = theme === 'dark' ? animatedLogoDark : animatedLogoLight;
  return (
    <div className={`splash-screen ${theme}`}> 
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="splash-video"
      />
      <h1 className="splash-title">Welcome to AI Bot 🤖</h1>
      <p className="splash-desc">Loading chat environment...</p>
    </div>
  );
};

export default SplashScreen; 