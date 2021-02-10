import React from 'react';

export const Slider = ({ title, radius, setRadius }) => {
  return (
    <div className="slider">
      <label>{title}: </label>
      <div className="slider-input-container">
        <input
          min={1}
          max={100}
          type="range"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        />
        <input
          type="text"
          className="slider-input-text"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        />
        <label>%</label>
      </div>
    </div>
  );
};
