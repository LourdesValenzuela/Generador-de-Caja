import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import BoxGenerator from '../BoxGenerator/BoxGenerator';
import './App.css';

const App = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (color) => {
    setBoxes([...boxes, color]);
  };

  return (
    <div>
      <BoxGenerator onAddBox={addBox} />
      <div className="box-container">
        {boxes.map((boxColor, index) => (
          <div key={index} className="box" style={{ backgroundColor: boxColor }}>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;



