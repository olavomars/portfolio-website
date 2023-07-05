import React from 'react';
import { ThemeContext } from '../Contexts/theme-context';
import { useContext } from 'react';
import '../styles/theme-variables.scss';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };

  return (
    <div>
      <div className='header-content'>
        <div className='toggle-btn-section'>
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className='toggle-btn__input'
              type='checkbox'
              name='checkbox'
              onChange={handleThemeChange}
              checked={theme === 'light'}
            />
            <button
              type='button'
              className={`toggle-btn__input-label`}
              onClick={handleThemeChange}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
