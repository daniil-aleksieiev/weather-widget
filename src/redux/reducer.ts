import { combineReducers } from 'redux';

import { ACTION_TYPE } from './actions'

const weather = (state = [], action: any) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return action.data;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  weather
});

export default rootReducer;