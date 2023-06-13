import {useState} from 'react';
import './Styles/App.scss';
import Header from './Components/Header';
import {HeroGrid} from './Components/HeroGrid';
import {FILTER_NAMES} from './Components/HeroGrid.model';

export const App = () => {
  const [theme, setTheme] = useState('light');

  const [currentFilter, setCurrentFilter] = useState(FILTER_NAMES.ALL);

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter.name);
  };

  return (
    <div>
      <Header
        currentFilter={currentFilter}
        handleFilterChange={handleFilterChange}
      />
      <HeroGrid currentFilter={currentFilter} />
    </div>
  );
};
