import React from 'react';

const MaskedInput = ({ placeholder, value, onChange }) => {
  const applyMask = (inputValue) => {
    const digitsOnly = inputValue.replace(/\D/g, '');
    return digitsOnly.replace(/(\d{2})(\d{2})(\d{2})/, '$1-$2-$3');
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        const maskedValue = applyMask(e.target.value);
        onChange(maskedValue);
      }}
    />
  );
};

export default MaskedInput;
