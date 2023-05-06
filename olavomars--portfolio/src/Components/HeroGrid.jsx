import React, {useState} from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';

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
      {i: 'a', x: 0, y: 0, w: 1, h: 1, minW: 2},
      {i: 'b', x: 0, y: 0, w: 2, h: 1, minW: 1},
      {i: 'c', x: 0, y: 0, w: 1, h: 1, minW: 1},
    ],
    md: [
      {i: 'a', x: 0, y: 0, w: 1, h: 1, minW: 1},
      {i: 'b', x: 0, y: 0, w: 2, h: 1, minW: 2},
      {i: 'c', x: 0, y: 0, w: 1, h: 1, minW: 1},
    ],
    sm: [
      {i: 'a', x: 0, y: 0, w: 1, h: 1, minW: 1},
      {i: 'b', x: 0, y: 0, w: 2, h: 1, minW: 1},
      {i: 'c', x: 0, y: 0, w: 1, h: 1, minW: 1},
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
      <div className='ugabuga' key='a'>
        a
      </div>
      <div className='ugabuga' key='b'>
        b
      </div>
      <div className='ugabuga' key='c'>
        c
      </div>
    </ResponsiveGridLayout>
  );
};
