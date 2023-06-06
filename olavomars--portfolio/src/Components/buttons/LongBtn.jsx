import React from 'react';
import './longBtn_Styles.scss';

const LongBtn = () => {
  return (
    <div id='longBtn-container'>
      <button className='longBtn-learn-more'>
        <span className='longBtn-circle' aria-hidden='true'>
          <span className='longBtn-icon longBtn-arrow'></span>
        </span>
        <span className='longBtn-text'>SPLIT</span>
      </button>
    </div>
  );
};

export default LongBtn;
