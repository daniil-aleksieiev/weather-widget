import React from 'react';
import { Box } from '@material-ui/core';

import SearchPanel from './SearchPanel';
import WeatherList from './WeatherList';

export const App = () => (
  <Box {...{
    component: 'div',
    style: {
      maxWidth: 600,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }}>
    <SearchPanel />
    <WeatherList />
  </Box>
);
