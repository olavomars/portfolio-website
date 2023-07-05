import React from 'react';
import './longBtn_Styles.scss';

const LongBtn = ({ innerText }) => {
  return (
    <div id='longBtn-container'>
      <button className='longBtn-learn-more button'>
        <span className='longBtn-circle' aria-hidden='true'>
          <span className='longBtn-icon longBtn-arrow'></span>
        </span>
        <span className='longBtn-text'>{innerText}</span>
      </button>
    </div>
  );
};

export default LongBtn;
