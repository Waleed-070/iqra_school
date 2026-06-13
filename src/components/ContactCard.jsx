import React from 'react';
import styled from 'styled-components';

const ContactCard = ({ detail }) => {
  const Icon = detail.icon;
  return (
    <StyledWrapper>
      <div className="card">
        <div className={`icon-container bg-gradient-to-br ${detail.gradient}`}>
          <Icon className="w-7 h-7 text-white" />
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
