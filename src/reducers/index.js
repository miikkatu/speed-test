import { combineReducers } from 'redux';

import game from './game';
import nav from './navigator';
import timer from './timer';

const AppReducer = combineReducers({
  game,
  nav,
  timer
});

export default AppReducer;
