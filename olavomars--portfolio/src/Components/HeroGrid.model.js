export const getLayouts = (currentFilter) => {
  const layout = LAYOUTS[currentFilter];
  if (!layout) {
    return LAYOUTS[FILTER_NAMES.ALL];
  }
  return layout;
};

export const FILTER_NAMES = {
  ALL: 'All',
  ABOUT: 'About',
  PROJECTS: 'Projects',
  PERSONAL: 'Personal',
};

const LAYOUTS = {
  [FILTER_NAMES.ALL]: {
    lg: [
      { i: 'Summary', x: 0, y: 0, w: 2, h: 1 },
      { i: 'Github', x: 0, y: 0, w: 1, h: 1 },
      { i: 'LinkedIn', x: 1, y: 0, w: 1, h: 1 },
      { i: 'Split-Keyboards', x: 2, y: 0, w: 1, h: 2 },
      { i: 'Maps', x: 3, y: 0, w: 1, h: 1 },
      { i: 'WeatherAI', x: 0, y: 0, w: 2, h: 1 },
      { i: 'Spotify', x: 3, y: 4, w: 2, h: 1 },
      { i: 'ThemeSwitch', x: 4, y: 3, w: 1, h: 1 },
    ],
    md: [
      { i: 'Summary', x: 0, y: 0, w: 2, h: 1 },
      { i: 'Github', x: 0, y: 0, w: 1, h: 1 },
      { i: 'LinkedIn', x: 1, y: 0, w: 1, h: 1 },
      { i: 'Split-Keyboards', x: 2, y: 0, w: 1, h: 2 },
      { i: 'Maps', x: 3, y: 0, w: 1, h: 1 },
      { i: 'WeatherAI', x: 0, y: 0, w: 2, h: 1 },
      { i: 'Spotify', x: 3, y: 4, w: 2, h: 1 },
      { i: 'ThemeSwitch', x: 4, y: 3, w: 1, h: 1 },
    ],
    sm: [
      { i: 'Summary', x: 0, y: 0, w: 2, h: 2 },
      { i: 'Github', x: 0, y: 0, w: 1, h: 1 },
      { i: 'LinkedIn', x: 1, y: 0, w: 1, h: 1 },
      { i: 'Split-Keyboards', x: 2, y: 0, w: 1, h: 2 },
      { i: 'Maps', x: 3, y: 0, w: 1, h: 1 },
      { i: 'WeatherAI', x: 0, y: 0, w: 2, h: 1 },
      { i: 'Spotify', x: 3, y: 4, w: 2, h: 1 },
      { i: 'ThemeSwitch', x: 4, y: 3, w: 1, h: 1 },
    ],
    xs: [
      { i: 'Summary', x: 0, y: 0, w: 2, h: 2 },
      { i: 'Github', x: 0, y: 0, w: 1, h: 1 },
      { i: 'LinkedIn', x: 1, y: 0, w: 1, h: 1 },
      { i: 'Split-Keyboards', x: 2, y: 0, w: 1, h: 2 },
      { i: 'Maps', x: 3, y: 0, w: 1, h: 1 },
      { i: 'WeatherAI', x: 0, y: 0, w: 2, h: 1 },
      { i: 'Spotify', x: 3, y: 4, w: 2, h: 1 },
      { i: 'ThemeSwitch', x: 4, y: 3, w: 1, h: 1 },
    ],
  },
  [FILTER_NAMES.ABOUT]: {
    lg: [
      { i: 'Summary', x: 0, y: 0, w: 2, h: 1 },
      { i: 'Github', x: 2, y: 2, w: 1, h: 1 },
      { i: 'LinkedIn', x: 4, y: 0, w: 1, h: 1 },
      { i: 'Split-Keyboards', x: 2, y: 0, w: 1, h: 2 },
      { i: 'Maps', x: 3, y: 1, w: 1, h: 1 },
      { i: 'WeatherAI', x: 0, y: 0, w: 2, h: 1 },
      { i: 'Spotify', x: 3, y: 4, w: 2, h: 1 },
      { i: 'ThemeSwitch', x: 4, y: 3, w: 1, h: 1 },
    ],
    md: [
      { i: 'Summary', x: 4, y: 0, w: 2, h: 1 },
      { i: 'Github', x: 0, y: 0, w: 1, h: 1 },
      { i: 'LinkedIn', x: 1, y: 0, w: 1, h: 1 },
      { i: 'Split-Keyboards', x: 2, y: 0, w: 1, h: 2 },
      { i: 'Maps', x: 3, y: 0, w: 1, h: 1 },
      { i: 'WeatherAI', x: 0, y: 0, w: 2, h: 1 },
      { i: 'Spotify', x: 3, y: 4, w: 2, h: 1 },
      { i: 'ThemeSwitch', x: 4, y: 3, w: 1, h: 1 },
    ],
    sm: [
      { i: 'Summary', x: 0, y: 0, w: 2, h: 2 },
      { i: 'Github', x: 0, y: 0, w: 1, h: 1 },
      { i: 'LinkedIn', x: 1, y: 0, w: 1, h: 1 },
      { i: 'Split-Keyboards', x: 2, y: 0, w: 1, h: 2 },
      { i: 'Maps', x: 3, y: 0, w: 1, h: 1 },
      { i: 'WeatherAI', x: 0, y: 0, w: 2, h: 1 },
      { i: 'Spotify', x: 3, y: 4, w: 2, h: 1 },
      { i: 'ThemeSwitch', x: 4, y: 3, w: 1, h: 1 },
    ],
    xs: [
      { i: 'Summary', x: 0, y: 0, w: 2, h: 2 },
      { i: 'Github', x: 0, y: 0, w: 1, h: 1 },
      { i: 'LinkedIn', x: 1, y: 0, w: 1, h: 1 },
      { i: 'Split-Keyboards', x: 2, y: 0, w: 1, h: 2 },
      { i: 'Maps', x: 3, y: 0, w: 1, h: 1 },
      { i: 'WeatherAI', x: 0, y: 0, w: 2, h: 1 },
      { i: 'Spotify', x: 3, y: 4, w: 2, h: 1 },
      { i: 'ThemeSwitch', x: 4, y: 3, w: 1, h: 1 },
    ],
  },
};
