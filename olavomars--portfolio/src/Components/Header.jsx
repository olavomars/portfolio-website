import {useMemo, useState} from 'react';
import '../styles/App.scss';
import {FILTER_NAMES} from './HeroGrid.model';

const FILTER_BADGES = [
  {name: FILTER_NAMES.ALL, left: 5, width: 40},
  {name: FILTER_NAMES.ABOUT, left: 55, width: 65},
  {name: FILTER_NAMES.PROJECTS, left: 129, width: 82},
  {name: FILTER_NAMES.PERSONAL, left: 218, width: 83},
];

function Header({handleFilterChange, currentFilter}) {
  const filter = useMemo(
    () =>
      FILTER_BADGES.find((filter) => {
        return filter.name === currentFilter;
      }),
    [currentFilter]
  );

  console.log(filter);

  return (
    <nav className='pages__Header'>
      <div className='pages__logoWrapper'>Logo</div>
      <div className='Filters__Container'>
        <div
          className='Filters__Highlight'
          style={{
            width: `${filter.width}px`,
            transform: `translate(${filter.left}px, 0)`,
            transition: 'transform 0.3s ease-in-out, width 0.4s ease',
          }}
        ></div>
        {FILTER_BADGES.map((filter) => (
          <div
            key={JSON.stringify(filter)}
            className={`Filters__Option ${
              currentFilter === filter.name ? 'active' : ''
            }`}
            onClick={() => handleFilterChange(filter)}
          >
            {filter.name}
          </div>
        ))}
      </div>
      <a className='pages__ContactButton'>Contact</a>
    </nav>
  );
}

export default Header;
