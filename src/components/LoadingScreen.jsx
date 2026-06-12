import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Show loading screen for 4 seconds, then start fading out
    const timer = setTimeout(() => {
      setFadingOut(true);
      
      // Wait for the fade out animation to finish before unmounting
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
      
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-wrapper ${fadingOut ? 'fade-out' : ''}`}>
      <div className="anim-wrapper">
        <div className="box-wrap">
          <div className="box one"></div>
          <div className="box two"></div>
          <div className="box three"></div>
          <div className="box four"></div>
          <div className="box five"></div>
          <div className="box six"></div>
        </div>
      </div>
      <div className="loading-text">
        Loading<span className="dots"></span>
      </div>
    </div>
  );
}
