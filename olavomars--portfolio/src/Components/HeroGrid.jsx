import React, { useMemo, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { STYLES, FILTER_NAMES } from './HeroGrid.model';

import { Summary } from './Summary';
import { Github } from './Github';
import { Spotify } from './Spotify';
import { SplitKeyboards } from './SplitKeyboards';
import { LinkedIn } from './Linkedin';
import { Maps } from './Maps';

import { getLayouts } from './HeroGrid.model';
import { AIWeatherApp } from './AIWeatherApp';
import { ThemeSwitch } from './ThemeSwitch';

import '../styles/theme-variables.scss';

const ResponsiveGridLayout = WidthProvider(Responsive, {
  measureBeforeMount: true,
});

export function HeroGrid({ currentFilter }) {
  const [rowHeight, setRowHeight] = useState(288);

  const handleBreakpointChange = (newBreakpoint) => {
    switch (newBreakpoint) {
      case 'lg':
        setRowHeight(288);
        break;
      case 'md':
        setRowHeight(288);
        break;
      case 'sm':
        setRowHeight(180);
        break;
      case 'xs':
        setRowHeight(164);
        break;
      default:
        setRowHeight(288);
    }
  };

  const layouts = useMemo(() => getLayouts(currentFilter), [currentFilter]);

  return (
    <ResponsiveGridLayout
      className='layout'
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 800, sm: 480, xs: 0 }}
      rowHeight={rowHeight}
      cols={{ lg: 4, md: 4, sm: 4, xs: 2 }}
      onBreakpointChange={handleBreakpointChange}
      margin={[15, 15]}
    >
      <div
        key='Summary'
        className={`summary__gridItem react-grid-item ${STYLES[currentFilter].Summary}`}
      >
        <Summary />
      </div>
      ,
      <div
        key='Github'
        className={`react-grid-item ${STYLES[currentFilter].Github}`}
      >
        <Github />
      </div>
      ,
      <div
        className={`LinkedIn react-grid-item ${STYLES[currentFilter].LinkedIn}`}
        key='LinkedIn'
      >
        <LinkedIn />
      </div>
      ,
      <div
        key='Split-Keyboards'
        className={`Split-Keyboards react-grid-item ${STYLES[currentFilter].SplitKeyboards}`}
      >
        <SplitKeyboards />
      </div>
      ,
      <div
        key='Maps'
        className={`Maps react-grid-item ${STYLES[currentFilter].Maps}`}
      >
        <Maps height={rowHeight} />
      </div>
      ,
      <div
        key='WeatherAI'
        className={`react-grid-item ${STYLES[currentFilter].WeatherAI}`}
      >
        <AIWeatherApp />
      </div>
      <div
        key='Spotify'
        className={`react-grid-item ${STYLES[currentFilter].Spotify}`}
      >
        <Spotify />
      </div>
      <div
        key='ThemeSwitch'
        className={`react-grid-item ${STYLES[currentFilter].ThemeSwitch}`}
      >
        <ThemeSwitch />
      </div>
      ,
    </ResponsiveGridLayout>
  );
}
