import { useEffect, useState } from 'react';
import './styles/App.scss';
import Header from './Components/Header';
import { HeroGrid } from './Components/HeroGrid';
import { FILTER_NAMES } from './Components/HeroGrid.model';
import { ThemeContext } from './Contexts/theme-context';
import './styles/theme-variables.scss';

export const App = () => {
  const [theme, setTheme] = useState('light');
  const [currentFilter, setCurrentFilter] = useState(FILTER_NAMES.ALL);

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter.name);
  };

  useEffect(() => {
    if (theme === 'light') {
      document.querySelector('body').classList.remove('theme-dark');
      document.querySelector('body').classList.add('theme-light');
    } else {
      document.querySelector('body').classList.remove('theme-light');
      document.querySelector('body').classList.add('theme-dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className='body'>
          <Header
            currentFilter={currentFilter}
            handleFilterChange={handleFilterChange}
          />
          <HeroGrid currentFilter={currentFilter} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
