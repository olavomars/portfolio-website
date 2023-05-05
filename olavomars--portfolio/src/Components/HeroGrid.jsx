import React from 'react';
import GridLayout from 'react-grid-layout';

export const HeroGrid = () => {
  const layout = [
    {i: 'a', x: 0, y: 0, w: 4, h: 4, minW: 4},
    {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: 'c', x: 4, y: 0, w: 1, h: 2},
  ];

  return (
    <GridLayout
      className='layout'
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
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
    </GridLayout>
  );
};
