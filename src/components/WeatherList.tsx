import React from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  weatherCard: {
    margin: '15px auto 0',
    padding: theme.spacing(2),
    maxWidth: 290,
    width: '100%',
    boxShadow: '1px 2px 10px rgba(0, 0, 0, .2)',
    backgroundColor: '#fff',
    textAlign: 'center'
  }
}))

const WeatherList = ({ ...props }) => {
  const classes = useStyles()

  return (
    <>
      {
        props.weather.cod === 200 && (
          <Box {...{
            component: 'div',
            className: classes.weatherCard
          }}>
            <Typography {...{
              variant: 'h2',
            }}>
              {props.weather.name}
            </Typography>
            <Typography {...{ variant: 'body1' }}>
              {props.weather.weather[0].main}
            </Typography>
            <Typography {...{ variant: 'body1' }}>
              Wind {props.weather.wind.speed}km/h
            </Typography>
            <Typography {...{ variant: 'body1' }}>
              Temperature now: {props.weather.main.temp}
            </Typography>
            <Typography {...{ variant: 'body1' }}>
              Temperature range: {props.weather.main.temp_min} - {props.weather.main.temp_max}
            </Typography>
          </Box>
        )
      }
    </>
  )
}

const mapStateToProps = (weather: any) => {
  return weather
};

export default connect(mapStateToProps)(WeatherList);
