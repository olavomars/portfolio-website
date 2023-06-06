import React, {useState} from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';

import {Summary} from './Summary';
import {Github} from './Github';
import {Spotify} from './Spotify';
import {SplitKeyboards} from './SplitKeyboards';
import {LinkedIn} from './Linkedin';
import {Maps} from './Maps';

export const HeroGrid = () => {
  const ResponsiveGridLayout = WidthProvider(Responsive);
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

  const layouts = {
    lg: [
      {i: 'Summary', x: 0, y: 0, w: 2, h: 1},
      {i: 'Github', x: 0, y: 0, w: 1, h: 1},
      {i: 'LinkedIn', x: 1, y: 0, w: 1, h: 1},
      {i: 'Split-Keyboards', x: 2, y: 0, w: 1, h: 2},
    ],
    md: [
      {i: 'Summary', x: 0, y: 0, w: 2, h: 1},
      {i: 'Github', x: 0, y: 0, w: 1, h: 1},
      {i: 'LinkedIn', x: 1, y: 0, w: 1, h: 1},
      {i: 'Split-Keyboards', x: 2, y: 0, w: 1, h: 2},
    ],
    sm: [
      {i: 'Summary', x: 0, y: 0, w: 2, h: 2},
      {i: 'Github', x: 0, y: 0, w: 1, h: 1},
      {i: 'LinkedIn', x: 1, y: 0, w: 1, h: 1},
      {i: 'Split-Keyboards', x: 2, y: 0, w: 1, h: 2},
    ],
    xs: [
      {i: 'Summary', x: 0, y: 0, w: 2, h: 2},
      {i: 'Github', x: 0, y: 0, w: 1, h: 1},
      {i: 'LinkedIn', x: 1, y: 0, w: 1, h: 1},
      {i: 'Split-Keyboards', x: 2, y: 0, w: 1, h: 2},
    ],
  };

  return (
    <ResponsiveGridLayout
      className='layout'
      layouts={layouts}
      breakpoints={{lg: 1200, md: 800, sm: 480, xs: 0}}
      rowHeight={rowHeight}
      cols={{lg: 4, md: 4, sm: 4, xs: 2}}
      onBreakpointChange={handleBreakpointChange}
    >
      <div key='Summary' className='summary__gridItem react-grid-item'>
        <Summary />
      </div>
      <div key='Github' className='react-grid-item'>
        <Github />
      </div>
      <div className='ugaugabuga' key='LinkedIn'>
        <Maps />
      </div>
      <div key='Split-Keyboards' className='Split-Keyboards react-grid-item'>
        <SplitKeyboards />
      </div>
    </ResponsiveGridLayout>
  );
};
