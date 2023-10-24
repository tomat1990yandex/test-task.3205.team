import React, { useState } from 'react';
import MaskedInput from './MaskedInput';

const SearchForm = ({ onSearch }) => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleSearch = () => {
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      alert('Некорректный email');
      return;
    }

    if (number && !/^\d{2}-\d{2}-\d{2}$/.test(number)) {
      alert('Некорректный формат номера');
      return;
    }

    const numberWithoutHyphens = number.replace(/-/g, '');
    onSearch({ email, number: numberWithoutHyphens });
  };


  return (
    <div className="search-form">
      <div className="input-container">
        <input
          type="text"
          placeholder="Email (required)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <MaskedInput
          placeholder="Number (optional)"
          value={number}
          onChange={setNumber}
        />
      </div>
      <button onClick={handleSearch}>Submit</button>
    </div>
  );
};

export default SearchForm;
