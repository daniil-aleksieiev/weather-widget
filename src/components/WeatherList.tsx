import React from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


interface ErrorProps {
  message: string;
  stack: string;
};

interface WeatherListProps {
  weather?: {
    data: any;
    error: Array<ErrorProps>;
  };
};

const useStyles = makeStyles((theme) => ({
  weatherCard: {
    margin: '15px auto 0',
    padding: theme.spacing(2),
    maxWidth: 290,
    width: '100%',
    boxShadow: '1px 2px 10px rgba(0, 0, 0, .2)',
    backgroundColor: '#fff',
    textAlign: 'center'
  },
}));

const WeatherList: React.FunctionComponent<WeatherListProps> = ({ weather }) => {
  const classes = useStyles();

  return (
    <>
      {
        (!!weather?.data.length) && (
          <Box {...{
            component: 'div',
            className: classes.weatherCard
          }}>
            <Typography {...{
              variant: 'h2',
            }}>
              {weather.data[0].name}
            </Typography>
            <Typography {...{ variant: 'body1' }}>
              {weather.data[0].weather[0].main}
            </Typography>
            <Typography {...{ variant: 'body1' }}>
              Wind {weather.data[0].wind.speed}km/h
            </Typography>
            <Typography {...{ variant: 'body1' }}>
              Temperature now: {weather.data[0].main.temp}
            </Typography>
            <Typography {...{ variant: 'body1' }}>
              Temperature range: {weather.data[0].main.temp_min} - {weather.data[0].main.temp_max}
            </Typography>
          </Box>
        )
      }
      {
        (!!weather?.error.length) && (
          <Typography {...{
            variant: 'h2'
          }}>
            {weather.error[0].message}
          </Typography>
        )
      }
    </>
  )
};

const mapStateToProps = (weather: WeatherListProps) => {
  return weather
};

export default connect(mapStateToProps)(WeatherList);
