import React from 'react';

import memoji from '../Assets/memoji.png';

export const Summary = () => {
  return (
    <div className='summary__container'>
      <div className='summary__memojiContainer'>
        <img src={memoji} className='summary__memoji'></img>
      </div>
      <p className='summary__text'>
        I'm Olavo, a developer from Brazil. I'm interested in React, Node,
        Product Design, Jamstack, Startups, Cryptocurrencies and Music.
      </p>
    </div>
  );
};
