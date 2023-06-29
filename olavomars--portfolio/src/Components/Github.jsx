import React from 'react';
import { SmallBtn } from './buttons/SmallBtn';

export const Github = () => {
  return (
    <div className='github__container link_component'>
      <img className='github__SVG' src='/Assets/icons8-github-60.svg' />
      <SmallBtn link='https://github.com/olavomars' />
    </div>
  );
};
