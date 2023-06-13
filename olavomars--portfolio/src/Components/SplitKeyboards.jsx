import React from 'react';

import LongBtn from './buttons/LongBtn';

export const SplitKeyboards = () => {
  return (
    <div className='SplitKeyboards-container'>
      <LongBtn className='longBtn' />
      <img
        className='SplitKeyboards-image'
        src='/src/Assets/portfolio-mockups.jpg'
      />
    </div>
  );
};
