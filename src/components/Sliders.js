import React from 'react';
import { Slider } from './Slider';

export const Sliders = ({
  topLeftRadius,
  setTopLeftRadius,
  topRightRadius,
  setTopRightRadius,
  bottomLeftRadius,
  setBottomLeftRadius,
  bottomRightRadius,
  setBottomRightRadius,
}) => {
  return (
    <form className="sliders-container">
      <h4>border-radius</h4>
      <Slider title={'top-left'} radius={topLeftRadius} setRadius={setTopLeftRadius} />
      <Slider title={'top-right'} radius={topRightRadius} setRadius={setTopRightRadius} />
      <Slider title={'bottom-left'} radius={bottomLeftRadius} setRadius={setBottomLeftRadius} />
      <Slider title={'bottom-right'} radius={bottomRightRadius} setRadius={setBottomRightRadius} />
    </form>
  );
};
