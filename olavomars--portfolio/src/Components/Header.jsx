import {useState, useEffect} from 'react';

import '../styles/App.scss';

function Header() {
  const [currentFilter, setCurrentFilter] = useState(1);
  const [highlightLeftPlacement, setHighlightLeftPlacement] = useState();
  const [highlightWidth, setHighlightWidth] = useState();

  useEffect(() => {
    setHighlightLeftPlacement(5);
    setHighlightWidth(40);
  }, []);

  const handleFilterChange = (currentFilter) => {
    const filtersArr = [1, 2, 3, 4];
    if (filtersArr[0] === currentFilter) {
      setHighlightLeftPlacement(5);
      setHighlightWidth(40);
    } else if (filtersArr[1] === currentFilter) {
      setHighlightLeftPlacement(55);
      setHighlightWidth(65);
    } else if (filtersArr[2] === currentFilter) {
      setHighlightLeftPlacement(129);
      setHighlightWidth(82);
    } else if (filtersArr[3] === currentFilter) {
      setHighlightLeftPlacement(218);
      setHighlightWidth(83);
    }
  };

  return (
    <nav className='pages__Header'>
      <div className='pages__logoWrapper'>Logo</div>
      <div className='Filters__Container'>
        <div
          className='Filters__Highlight'
          style={{
            width: `${highlightWidth}px`,
            transform: `translate(${highlightLeftPlacement}px, 0)`,
            transition: 'transform 0.3s ease-in-out, width 0.4s ease',
          }}
        ></div>
        <div
          className='Filters__Option'
          onClick={() => {
            setCurrentFilter(1);
            handleFilterChange(1);
          }}
        >
          All
        </div>
        <div
          className='Filters__Option'
          onClick={() => {
            setCurrentFilter(2);
            handleFilterChange(2);
          }}
        >
          About
        </div>
        <div
          className='Filters__Option'
          onClick={() => {
            setCurrentFilter(3);
            handleFilterChange(3);
          }}
        >
          Projects
        </div>
        <div
          className='Filters__Option'
          onClick={() => {
            setCurrentFilter(4);
            handleFilterChange(4);
          }}
        >
          Personal
        </div>
      </div>
      <a className='pages__ContactButton'>Contact</a>
    </nav>
  );
}

export default Header;
