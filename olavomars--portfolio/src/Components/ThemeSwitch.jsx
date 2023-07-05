import React from 'react';
import { ThemeContext } from '../Contexts/theme-context';
import { useContext } from 'react';

import '@theme-toggles/react/css/Within.css';
import { Within } from '@theme-toggles/react';
import '../styles/theme-variables.scss';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };

  return (
    <div className='themeSwitch__btn-container'>
      <Within
        duration={750}
        className='themeSwitch__btn'
        onToggle={handleThemeChange}
      />
    </div>
  );
};
