import React from 'react';
import { connect } from 'react-redux';
import { Box, TextField, Button } from '@material-ui/core';

import { fetchWeatherData } from '../redux/actions';

interface SearchPanelProps {
  fetchData: (city: string | null) => any
}

const SearchPanel: React.FunctionComponent<SearchPanelProps> = ({ fetchData }) => {
  const [city, setCity] = React.useState<string | null>(null);

  const submitHandler = () => {
    fetchData(city)
  };

  return (
    <Box {...{
      component: 'div',
      p: 2,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }}>
      <TextField {...{
        required: true,
        label: 'Where you are?',
        onChange: (e) => setCity(e.target.value),
        style: {
          margin: '15px 0'
        }
      }} />

      <Button {...{
        onClick: submitHandler,
        variant: 'outlined',
        color: 'primary'
      }}>Get Weather</Button>
    </Box>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: (city: string | null) => dispatch(fetchWeatherData(city))
  };
};

export default connect(null, mapDispatchToProps)(SearchPanel);
