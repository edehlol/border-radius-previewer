import React from 'react';

export const Box = ({ topLeftRadius, topRightRadius, bottomLeftRadius, bottomRightRadius }) => {
  return (
    <div
      style={{
        borderRadius: `${topLeftRadius}% ${topRightRadius}% ${bottomLeftRadius}% ${bottomRightRadius}%`,
      }}
      className="box"
    ></div>
  );
};
