import React from 'react';
import animatedLogoLight from './assets/Animated logo light .mp4';
import animatedLogoDark from './assets/Animated logo dark.mp4';

const SplashScreen = ({ theme = 'light' }) =>{
  const videoSrc = theme === 'dark' ? animatedLogoDark : animatedLogoLight;
  return (
    <div className="splash-screen" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: theme === 'dark' ? '#222' : '#ede8ee' }}>
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        style={{ width: 200, height: 200, borderRadius: '50%', marginBottom: 24 }}
      />
      <h1 style={{ color: theme === 'dark' ? '#fff' : '#222' }}>Welcome to AI Bot 🤖</h1>
      <p style={{ color: theme === 'dark' ? '#fff' : '#222' }}>Loading chat environment...</p>
    </div>
  );
};

export default SplashScreen; 