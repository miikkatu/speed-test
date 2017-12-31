const stopwatch = (state = {}, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return Object.assign({}, state, {
        interval: action.interval
      });
    case 'STOP_TIMER':
      return Object.assign({}, state, { interval: null });
  }
  return state;
};

export default stopwatch;
