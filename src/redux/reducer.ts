import { combineReducers } from 'redux';

import { ACTION_TYPE } from './actions';

interface ActionProps {
  type: string;
  data?: [],
  error?: any
}

const initialState = {
  data: [],
  error: []
};

const weather = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      
      return {
        ...state,
        data: [action.data],
        error: {}
      }
    case ACTION_TYPE.FAIL:
      return {
        ...state,
        error: [action.error]
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  weather
});

export default rootReducer;
