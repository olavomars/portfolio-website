import React from 'react';
import linkedInLogo from '../Assets/icons8-linkedin.svg';
import {SmallBtn} from './buttons/SmallBtn';

export const LinkedIn = () => {
  return (
    <div className='linkedin__container link_component'>
      <img className='github__SVG' src={linkedInLogo} />
      <SmallBtn link='https://linkedin.com/in/olavomart' />
    </div>
  );
};
