import React from 'react';
import styled from 'styled-components';

const FloatingInput = ({ label, id, type = "text", value, onChange, required, Icon, as = "input", options = [], ...props }) => {
  const InputElement = as;
  return (
    <StyledWrapper>
      <div className="input-container">
        {as === 'select' ? (
          <select 
            id={id} 
            name={id}
            required={required} 
            value={value} 
            onChange={onChange}
            className={value ? 'has-value' : ''}
            {...props}
          >
            <option value="" disabled hidden></option>
            {options.map(opt => <option key={opt.value || opt} value={opt.value || opt}>{opt.label || opt}</option>)}
          </select>
        ) : (
          <InputElement 
            type={type} 
            id={id} 
            name={id}
            required={required} 
            value={value} 
            onChange={onChange}
            className={value ? 'has-value' : ''}
            {...props}
          />
        )}
        <label htmlFor={id} className="label">
          {Icon && <Icon className="icon-svg" />} {label}
        </label>
        <div className="underline" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 25px;

  .input-container {
    position: relative;
    width: 100%;
  }

  .input-container input,
  .input-container textarea,
  .input-container select {
    font-size: 16px;
    width: 100%;
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 10px 0;
    background-color: transparent;
    outline: none;
    color: #334155;
    font-family: inherit;
  }

  .input-container textarea {
    resize: vertical;
    min-height: 80px;
  }

  .input-container select {
    appearance: none;
    cursor: pointer;
  }

  .input-container .label {
    position: absolute;
    top: 10px;
    left: 0;
    color: #94a3b8;
    transition: all 0.3s ease;
    pointer-events: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .input-container .icon-svg {
    width: 18px;
    height: 18px;
  }

  .input-container input:focus ~ .label,
  .input-container input:valid ~ .label,
  .input-container input.has-value ~ .label,
  .input-container textarea:focus ~ .label,
  .input-container textarea:valid ~ .label,
  .input-container textarea.has-value ~ .label,
  .input-container select:focus ~ .label,
  .input-container select:valid ~ .label,
  .input-container select.has-value ~ .label {
    top: -22px;
    font-size: 14px;
    color: #059669; /* emerald-600 */
  }

  .input-container .underline {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #059669; /* emerald-600 */
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
  }

  .input-container input:focus ~ .underline,
  .input-container input:valid ~ .underline,
  .input-container input.has-value ~ .underline,
  .input-container textarea:focus ~ .underline,
  .input-container textarea:valid ~ .underline,
  .input-container textarea.has-value ~ .underline,
  .input-container select:focus ~ .underline,
  .input-container select:valid ~ .underline,
  .input-container select.has-value ~ .underline {
    transform: scaleX(1);
  }
`;

export default FloatingInput;
