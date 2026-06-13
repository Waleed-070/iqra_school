import React from 'react';
import styled from 'styled-components';

const AnimatedArrow = ({ color = 'white', shadowColor = 'rgba(0,0,0,0.2)', className = '' }) => {
  return (
    <Wrapper className={`icon ${className}`} style={{ '--arrow-color': color, '--arrow-shadow': shadowColor }}>
      <div />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  margin-left: 8px;

  div,
  div::before,
  div::after {
    height: 3px;
    border-radius: 1px;
    background-color: var(--arrow-color);
  }

  div::before,
  div::after {
    content: "";
    position: absolute;
    right: 0;
    transform-origin: center right;
    width: 14px;
    border-radius: 15px;
    transition: all 0.3s ease;
  }

  div {
    position: relative;
    width: 24px;
    box-shadow: -2px 2px 5px var(--arrow-shadow);
    transform: scale(0.9);
    background: var(--arrow-color);
    animation: swingArrow 1s ease-in-out infinite;
    animation-play-state: paused;
  }

  div::before {
    transform: rotate(44deg);
    top: 1px;
    box-shadow: 1px -2px 3px -1px var(--arrow-shadow);
    animation: rotateArrowLine 1s linear infinite;
    animation-play-state: paused;
  }

  div::after {
    bottom: 1px;
    transform: rotate(316deg);
    box-shadow: -2px 2px 3px 0 var(--arrow-shadow);
    background: var(--arrow-color);
    animation: rotateArrowLine2 1s linear infinite;
    animation-play-state: paused;
  }

  /* Trigger animations when parent .group is hovered */
  .group:hover & div::before,
  .group:hover & div::after,
  .group:hover & div {
    animation-play-state: running;
  }

  @keyframes swingArrow {
    50% {
      transform: translateX(5px) scale(0.9);
    }
  }

  @keyframes rotateArrowLine {
    50% {
      transform: rotate(30deg);
    }
    80% {
      transform: rotate(55deg);
    }
  }

  @keyframes rotateArrowLine2 {
    50% {
      transform: rotate(330deg);
    }
    80% {
      transform: rotate(300deg);
    }
  }
`;

export default AnimatedArrow;
