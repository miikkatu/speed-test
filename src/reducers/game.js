import { dropRight } from 'lodash';
import { combineReducers } from 'redux';
import { createAction, handleAction, handleActions } from 'redux-actions';

import * as actions from '../actions';

function generateRandom(min, max, excluded) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;

  return excluded.find(x => x === num)
    ? generateRandom(min, max, excluded)
    : num;
}

const highScore = handleAction(actions.setHighScore, (state, action) =>
  (action.payload.score || state), 0);

const lit = handleActions({
  [actions.endGame]: () => [],
  [actions.lightFirst]: (state, action) => {
    const rand = generateRandom(1, 4, state);
    return [rand];
  },
  [actions.lightNext]: (state, action) => {
    if (state.length < 4) {
      const rand = generateRandom(1, 4, state);
      return [...state, rand];
    } else {
      return state;
    }
  },
  [actions.rightPressed]: (state, action) => {
    return state.filter(e => e !== action.payload.id);
  }
}, []);

const score = handleActions({
  [actions.addScore]: (state, action) => state + 1,
  [actions.resetScore]: (state, action) => 0
}, 0);

export default combineReducers({
  highScore,
  lit,
  score
});
