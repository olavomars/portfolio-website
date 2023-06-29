import React, { useMemo, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

import { Summary } from './Summary';
import { Github } from './Github';
import { Spotify } from './Spotify';
import { SplitKeyboards } from './SplitKeyboards';
import { LinkedIn } from './Linkedin';
import { Maps } from './Maps';

import { getLayouts } from './HeroGrid.model';
import { AIWeatherApp } from './AIWeatherApp';

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

  const gridItems = useMemo(() => {
    return [
      <div key='Summary' className='summary__gridItem react-grid-item'>
        <Summary />
      </div>,
      <div key='Github' className='react-grid-item'>
        <Github />
      </div>,
      <div className='LinkedIn react-grid-item' key='LinkedIn'>
        <LinkedIn />
      </div>,
      <div key='Split-Keyboards' className='Split-Keyboards react-grid-item'>
        <SplitKeyboards />
      </div>,
      <div key='Maps' className='Maps react-grid-item'>
        <Maps height={rowHeight} />
      </div>,
      <div key='WeatherAI' className='react-grid-item'>
        <AIWeatherApp />
      </div>,
    ];
  }, []);

  return (
    <ResponsiveGridLayout
      className='layout'
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 800, sm: 480, xs: 0 }}
      rowHeight={rowHeight}
      cols={{ lg: 4, md: 4, sm: 4, xs: 2 }}
      onBreakpointChange={handleBreakpointChange}
    >
      {gridItems}
    </ResponsiveGridLayout>
  );
}
