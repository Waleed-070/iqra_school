import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [zoomIn, setZoomIn] = useState(false);

  useEffect(() => {
    // Show the logo and animated text for 4 seconds, then trigger the massive zoom in
    const timer = setTimeout(() => {
      setZoomIn(true);
      
      // Wait for the 1.5s zoom-in animation to finish before completely unmounting and revealing the website
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1500);
      
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-wrapper ${zoomIn ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <img 
          src="/ivsl3-logo.png" 
          alt="IQRA Logo" 
          className={`splash-logo ${zoomIn ? 'zoom-in' : ''}`} 
        />
        
        {/* Restored IQRA Animated SVG Text */}
        <div className={`iqra-svg-text ${zoomIn ? 'fade-out-fast' : ''}`}>
          <div className="loader">
            <svg height={0} width={0} viewBox="0 0 64 64" className="absolute">
              <defs xmlns="http://www.w3.org/2000/svg">
                <linearGradient gradientUnits="userSpaceOnUse" y2={2} x2={0} y1={62} x1={0} id="grad-i">
                  <stop stopColor="#973BED" />
                  <stop stopColor="#007CFF" offset={1} />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" y2={0} x2={0} y1={64} x1={0} id="grad-q">
                  <stop stopColor="#FFC800" />
                  <stop stopColor="#F0F" offset={1} />
                  <animateTransform repeatCount="indefinite" keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1" keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1" dur="8s" values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32" type="rotate" attributeName="gradientTransform" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" y2={2} x2={0} y1={62} x1={0} id="grad-r">
                  <stop stopColor="#00E0ED" />
                  <stop stopColor="#00DA72" offset={1} />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" y2={2} x2={0} y1={62} x1={0} id="grad-a">
                  <stop stopColor="#FF416C" />
                  <stop stopColor="#FF4B2B" offset={1} />
                </linearGradient>
              </defs>
            </svg>

            {/* LETTER I */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#grad-i)" d="M 32,6 V 58" className="dash" id="letter-i" pathLength={360} />
            </svg>
            <div className="letter-gap" />
            {/* LETTER Q */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#grad-q)" d="M 32,10 A 22,22 0 1,1 31.9,10 Z M 44,44 L 56,56" className="spin" id="letter-q" pathLength={360} />
            </svg>
            <div className="letter-gap" />
            {/* LETTER R */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#grad-r)" d="M 16,58 V 6 H 36 A 13,13 0 0,1 36,32 H 16 M 32,32 L 52,58" className="dash" id="letter-r" pathLength={360} />
            </svg>
            <div className="letter-gap" />
            {/* LETTER A */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#grad-a)" d="M 12,58 L 32,6 L 52,58 M 20,38 H 44" className="dash" id="letter-a" pathLength={360} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
