import React from 'react';

import LongBtn from './buttons/LongBtn';

export const SplitKeyboards = () => {
  return (
    <div className='SplitKeyboards-container'>
      <LongBtn innerText={'SPLIT'} className='longBtn' />
      <img className='SplitKeyboards-image' src='/Assets/Spleet.png' />
    </div>
  );
};
