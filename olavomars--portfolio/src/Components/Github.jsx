import React from 'react';
import githubLogo from '../Assets/icons8-github-60.svg';
import {SmallBtn} from './buttons/SmallBtn';

export const Github = () => {
  return (
    <div className='github__container link_component'>
      <img className='github__SVG' src={githubLogo} />
      <SmallBtn link='https://github.com/olavomars' />
    </div>
  );
};
