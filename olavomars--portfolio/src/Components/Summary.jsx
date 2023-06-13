import React from 'react';

export const Summary = () => {
  return (
    <div className='summary__container'>
      <div className='summary__memojiContainer'>
        <img
          src='/src/Assets/smiling_memoji.png'
          className='summary__memoji'
        ></img>
      </div>
      <p className='summary__text'>
        I'm <span className='summary__gradientText'>Olavo</span>, a developer
        from Brazil. I'm interested in Javascript, React Product Design,
        Startups, Cats and Music.
      </p>
    </div>
  );
};
