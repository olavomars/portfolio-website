import React from 'react';

import {SmallBtn} from './buttons/SmallBtn';

export const LinkedIn = () => {
  return (
    <div className='linkedin__container link_component'>
      <img className='github__SVG' src='/src/Assets/icons8-linkedin.svg' />
      <SmallBtn link='https://linkedin.com/in/olavomart' />
    </div>
  );
};
