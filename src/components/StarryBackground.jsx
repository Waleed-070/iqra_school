import React, { useMemo } from 'react';
import styled from 'styled-components';

// Helper function to generate the box-shadow CSS strings for the stars dynamically
const createStars = (n) => {
  let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #fff`;
  for (let i = 2; i <= n; i++) {
    value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #fff`;
  }
  return value;
};

const StarryBackground = () => {
  // Generate static strings once per mount to prevent jittering on re-renders
  const shadowsSmall = useMemo(() => createStars(700), []);
  const shadowsMedium = useMemo(() => createStars(200), []);
  const shadowsBig = useMemo(() => createStars(100), []);

  return (
    <StyledWrapper 
      $shadowsSmall={shadowsSmall} 
      $shadowsMedium={shadowsMedium} 
      $shadowsBig={shadowsBig}
    >
      <div className="starry-container">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
  
  .starry-container {
    height: 100%;
    width: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
    position: absolute;
  }

  #stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${props => props.$shadowsSmall};
    animation: animStar 50s linear infinite;
    will-change: transform;
    transform: translateZ(0);
  }
  #stars:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${props => props.$shadowsSmall};
    will-change: transform;
    transform: translateZ(0);
  }

  #stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${props => props.$shadowsMedium};
    animation: animStar 100s linear infinite;
    will-change: transform;
    transform: translateZ(0);
  }
  #stars2:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${props => props.$shadowsMedium};
    will-change: transform;
    transform: translateZ(0);
  }

  #stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${props => props.$shadowsBig};
    animation: animStar 150s linear infinite;
    will-change: transform;
    transform: translateZ(0);
  }
  #stars3:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${props => props.$shadowsBig};
    will-change: transform;
    transform: translateZ(0);
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }
`;

export default StarryBackground;
