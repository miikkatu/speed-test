import { createAction } from 'redux-actions';

export const setHighScore = createAction('SET_HIGH_SCORE');
export const addScore = createAction('ADD_SCORE');
export const resetScore = createAction('RESET_SCORE');

export const lightFirst = createAction('LIGHT_FIRST');
export const lightNext = createAction('LIGHT_NEXT');

export const rightPressed = createAction('RIGHT_PRESSED');

export const endGame = createAction('END_GAME');
