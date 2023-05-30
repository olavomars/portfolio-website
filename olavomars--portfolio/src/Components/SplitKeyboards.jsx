import React from 'react';
import SplitImage from '../Assets/portfolio-mockups.jpg';
import LongBtn from './buttons/LongBtn';

export const SplitKeyboards = () => {
  return (
    <div className='SplitKeyboards-container'>
      <LongBtn className='longBtn' />
      <img className='SplitKeyboards-image' src={SplitImage} />
    </div>
  );
};
