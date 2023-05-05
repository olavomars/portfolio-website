import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './Styles/App.scss';
import Header from './Components/Header';

import {ThemeContext} from './Contexts/theme-context';
import {HeroGrid} from './Components/HeroGrid';

export const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div>
      <Header />
      <HeroGrid />
    </div>
  );
};
