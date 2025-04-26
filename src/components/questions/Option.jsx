// src/components/questions/Option.jsx
import React from 'react';

const Option = ({ optionText, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`p-3 border rounded cursor-pointer ${
        isSelected ? 'bg-pink-100 border-purple-500 text-black'   : ''
      }`}
    >
      {optionText}
    </div>
  );
};

export default Option;
