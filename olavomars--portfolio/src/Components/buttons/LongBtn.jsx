import React from 'react';
import './longBtn_Styles.scss';

const LongBtn = () => {
  return (
    <div id='longBtn-container'>
      <button class='longBtn-learn-more'>
        <span class='longBtn-circle' aria-hidden='true'>
          <span class='longBtn-icon longBtn-arrow'></span>
        </span>
        <span class='longBtn-text'>SPLIT</span>
      </button>
    </div>
  );
};

export default LongBtn;
