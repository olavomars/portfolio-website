import React from 'react';

import './smallBtn__Styles.css';

export const SmallBtn = ({link}) => {
  return (
    <a href={link} target='_blank' className='smallBtn__container'>
      <div className='round'>
        <div id='cta'>
          <span className='arrow primera next '></span>
          <span className='arrow segunda next '></span>
        </div>
      </div>
    </a>
  );
};
