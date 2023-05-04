import React from 'react';

import '../styles/App.scss';

function Header() {
  return (
    <nav className='pages__Header'>
      <div className='pages__logoWrapper'>Logo</div>
      <div className='Filters__Container'>
        <div className='Filters__Highlight'></div>
        <div className='Filters__Option'>All</div>
        <div className='Filters__Option'>About</div>
        <div className='Filters__Option'>Projects</div>
        <div className='Filters__Option'>Personal</div>
      </div>
      <a className='pages__ContactButton'>Contact</a>
    </nav>
  );
}

export default Header;
