const API_URL: string = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY: string = '1294d637338e59ee05860459f0fe4933';

export const ACTION_TYPE = {
  SUCCESS: 'WEATHER_FETCH_DATA_SUCCESS',
  FAIL: 'WEATHER_FETCH_DATA_FAIL'
};

const fetchWeatherDataSuccess = (data: []) => {
  return {
    type: ACTION_TYPE.SUCCESS,
    data
  }
};

const fetchWeatherDataFail = (error: any) => {
  return {
    type: ACTION_TYPE.FAIL,
    error
  }
};

export function fetchWeatherData(city: string | null) {
  return (dispatch: any) => {
    fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(fetchWeatherDataSuccess(data)))
      .catch(error => dispatch(fetchWeatherDataFail(error)))
  }
};
