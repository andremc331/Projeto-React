import React, { useState } from 'react';

interface InputProps {
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="number" 
        value={value} 
        onChange={onChange} 
        min="0" 
        max="255" 
        style={{ margin: '5px' }} 
      />
    </div>
  );
};

export default Input;