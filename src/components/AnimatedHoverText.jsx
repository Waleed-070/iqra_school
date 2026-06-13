import React from 'react';
import styled from 'styled-components';

const AnimatedHoverText = ({ text, color = 'white', className = '' }) => {
  const letters = text.split('');
  return (
    <Wrapper className={className} style={{ '--text-color': color }}>
      <span className="char">
        {letters.map((char, index) => (
          <span key={index} data-label={char} style={{ "--i": index + 1, whiteSpace: 'pre' }}>
            {char}
          </span>
        ))}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  
  .char {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  
  .char span {
    display: block;
    color: transparent;
    position: relative;
    z-index: 2;
    animation: charAppear 1.2s ease backwards calc(var(--i) * 0.03s);
  }
  
  .char span::before,
  .char span::after {
    content: attr(data-label);
    position: absolute;
    color: var(--text-color);
    left: 0;
  }
  
  .char span::before {
    opacity: 0;
    transform: translateY(-100%);
  }

  .group:hover & .char span::before {
    animation: charAppear 0.7s ease calc(var(--i) * 0.03s);
  }

  .group:hover & .char span::after {
    opacity: 1;
    animation: charDisappear 0.7s ease calc(var(--i) * 0.03s);
  }

  @keyframes charAppear {
    0% {
      transform: translateY(50%);
      opacity: 0;
      filter: blur(20px);
    }
    20% {
      transform: translateY(70%);
      opacity: 1;
    }
    50% {
      transform: translateY(-15%);
      opacity: 1;
      filter: blur(0);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes charDisappear {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-70%);
      opacity: 0;
      filter: blur(3px);
    }
  }
`;

export default AnimatedHoverText;
