import React, { useState } from 'react';
import '../App/App.css';

const BoxGenerator = ({ onAddBox }) => {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color) {
      onAddBox(color);
      setColor('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colorInput">Color</label>
        <input
          id="colorInput"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default BoxGenerator;

