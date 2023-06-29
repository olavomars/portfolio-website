import React from 'react';

import LongBtn from './buttons/LongBtn';

export const AIWeatherApp = () => {
  return (
    <div className='SplitKeyboards-container'>
      <LongBtn innerText={'WEATHER'} className='longBtn' />
      <img className='AiWeather-image' src='/Assets/Weather-AI.png' />
    </div>
  );
};
