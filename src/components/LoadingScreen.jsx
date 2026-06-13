import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
      <StyledWrapper>
        <div className="loader">
          {/* Gradients used to color the paths */}
          <svg height={0} width={0} viewBox="0 0 64 64" className="absolute">
            <defs xmlns="http://www.w3.org/2000/svg">
              {/* Blue-Purple Gradient for 'I' */}
              <linearGradient gradientUnits="userSpaceOnUse" y2={2} x2={0} y1={62} x1={0} id="grad-i">
                <stop stopColor="#973BED" />
                <stop stopColor="#007CFF" offset={1} />
              </linearGradient>
              
              {/* Orange-Pink Animated Gradient for 'Q' */}
              <linearGradient gradientUnits="userSpaceOnUse" y2={0} x2={0} y1={64} x1={0} id="grad-q">
                <stop stopColor="#FFC800" />
                <stop stopColor="#F0F" offset={1} />
                <animateTransform repeatCount="indefinite" keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1" keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1" dur="8s" values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32" type="rotate" attributeName="gradientTransform" />
              </linearGradient>
              
              {/* Cyan-Green Gradient for 'R' */}
              <linearGradient gradientUnits="userSpaceOnUse" y2={2} x2={0} y1={62} x1={0} id="grad-r">
                <stop stopColor="#00E0ED" />
                <stop stopColor="#00DA72" offset={1} />
              </linearGradient>

              {/* Red-Orange Gradient for 'A' */}
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
            {/* Main circle + diagonal tick tail */}
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
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .absolute {
    position: absolute;
  }

  .inline-block {
    display: inline-block;
  }

  .loader {
    display: flex;
    margin: 0.25em 0;
    justify-content: center;
    align-items: center;
  }

  /* Spacing between your new letters */
  .letter-gap {
    width: 0.75em;
  }

  .dash {
    animation:
      dashArray 2s ease-in-out infinite,
      dashOffset 2s linear infinite;
  }

  .spin {
    animation:
      spinDashArray 2s ease-in-out infinite,
      spin 8s ease-in-out infinite,
      dashOffset 2s linear infinite;
    transform-origin: center;
  }

  @keyframes dashArray {
    0% {
      stroke-dasharray: 0 1 359 0;
    }
    50% {
      stroke-dasharray: 0 359 1 0;
    }
    100% {
      stroke-dasharray: 359 1 0 0;
    }
  }

  @keyframes spinDashArray {
    0% {
      stroke-dasharray: 270 90;
    }
    50% {
      stroke-dasharray: 0 360;
    }
    100% {
      stroke-dasharray: 270 90;
    }
  }

  @keyframes dashOffset {
    0% {
      stroke-dashoffset: 365;
    }
    100% {
      stroke-dashoffset: 5;
    }
  }

  @keyframes spin {
    0% {
      rotate: 0deg;
    }
    12.5%, 25% {
      rotate: 270deg;
    }
    37.5%, 50% {
      rotate: 540deg;
    }
    62.5%, 75% {
      rotate: 810deg;
    }
    87.5%, 100% {
      rotate: 1080deg;
    }
  }
`;
