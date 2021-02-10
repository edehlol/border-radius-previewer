import React, { useState } from 'react';
import { Sliders } from './Sliders';
import { Box } from './Box';
import { BorderStyle } from './BorderStyle';

const App = () => {
  const [topLeftRadius, setTopLeftRadius] = useState(15);
  const [topRightRadius, setTopRightRadius] = useState(15);
  const [bottomLeftRadius, setBottomLeftRadius] = useState(30);
  const [bottomRightRadius, setBottomRightRadius] = useState(30);
  return (
    <div className="container">
      <Box
        topLeftRadius={topLeftRadius}
        topRightRadius={topRightRadius}
        bottomLeftRadius={bottomLeftRadius}
        bottomRightRadius={bottomRightRadius}
      />

      <div>
        <Sliders
          topLeftRadius={topLeftRadius}
          setTopLeftRadius={setTopLeftRadius}
          topRightRadius={topRightRadius}
          setTopRightRadius={setTopRightRadius}
          bottomLeftRadius={bottomLeftRadius}
          setBottomLeftRadius={setBottomLeftRadius}
          bottomRightRadius={bottomRightRadius}
          setBottomRightRadius={setBottomRightRadius}
        />
        <BorderStyle
          topLeftRadius={topLeftRadius}
          topRightRadius={topRightRadius}
          bottomLeftRadius={bottomLeftRadius}
          bottomRightRadius={bottomRightRadius}
        />
      </div>
    </div>
  );
};

export default App;
