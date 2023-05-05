import {useState} from 'react';
import '../styles/App.scss';

const FILTERS = [
  {id: 1, name: 'All', left: 5, width: 40},
  {id: 2, name: 'About', left: 55, width: 65},
  {id: 3, name: 'Projects', left: 129, width: 82},
  {id: 4, name: 'Personal', left: 218, width: 83},
];

function Header() {
  const [currentFilter, setCurrentFilter] = useState(FILTERS[0]);

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <nav className='pages__Header'>
      <div className='pages__logoWrapper'>Logo</div>
      <div className='Filters__Container'>
        <div
          className='Filters__Highlight'
          style={{
            width: `${currentFilter.width}px`,
            transform: `translate(${currentFilter.left}px, 0)`,
            transition: 'transform 0.3s ease-in-out, width 0.4s ease',
          }}
        ></div>
        {FILTERS.map((filter) => (
          <div
            key={filter.id}
            className={`Filters__Option ${
              currentFilter.id === filter.id ? 'active' : ''
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
