import React from 'react';

const LongBtn = () => {
  return (
    <div id='container'>
      <button class='learn-more'>
        <span class='circle' aria-hidden='true'>
          <span class='icon arrow'></span>
        </span>
        <span class='button-text'>Learn More</span>
      </button>
    </div>
  );
};

export default LongBtn;
