import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const HoverGif = ({ src, alt, className, style, isHovered }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
      }
    };
  }, [src]);

  // We restart the GIF on hover by appending a timestamp to the src so it plays from the beginning!
  const gifSrc = isHovered ? `${src}?t=${Date.now()}` : src;

  return (
    <div className={className} style={{ ...style, position: 'relative' }}>
      {/* Static Canvas showing the first frame */}
      <canvas 
        ref={canvasRef} 
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: isHovered ? 0 : 1 }} 
      />
      {/* Animated GIF that plays on hover */}
      <img 
        src={gifSrc} 
        alt={alt} 
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: isHovered ? 1 : 0 }} 
      />
    </div>
  );
};

const ContactCard = ({ detail }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = detail.icon;
  
  return (
    <StyledWrapper>
      <div 
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`icon-container bg-gradient-to-br ${detail.gradient}`}>
          {detail.iconSrc ? (
            <HoverGif 
              src={detail.iconSrc} 
              alt={detail.title} 
              isHovered={isHovered}
              className="w-10 h-10 object-contain mix-blend-screen" 
              style={{ filter: 'invert(1)' }}
            />
          ) : (
            <detail.icon className="w-7 h-7 text-white" />
          )}
        </div>
        <h3 className="title">{detail.title}</h3>
        <p className="primary-text">{detail.primary}</p>
        <p className="secondary-text">{detail.secondary}</p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  height: 100%;

  .card {
   width: 100%;
   height: 100%;
   min-height: 254px;
   border-radius: 50px;
   background: #e0e0e0;
   box-shadow: 20px 20px 60px #bebebe,
               -20px -20px 60px #ffffff;
               
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 24px;
   text-align: center;
   transition: all 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .icon-container {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .title {
    font-size: 14px;
    font-weight: 700;
    color: #1e293b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 12px;
  }

  .primary-text {
    font-size: 14px;
    color: #475569;
    margin-bottom: 4px;
    word-break: break-word;
  }

  .secondary-text {
    font-size: 14px;
    color: #64748b;
    word-break: break-word;
  }
`;

export default ContactCard;
