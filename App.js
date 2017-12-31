import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import * as actions from './src/actions';
import reducers from './src/reducers';

import AppNavigator from './src/navigator';

const timerMiddleware = store => next => action => {
  if (action.type === 'START_TIMER') {
    action.interval = setInterval(
      () => store.dispatch({type: 'LIGHT_NEXT'}),
      500
    );
  } else if (action.type === 'STOP_TIMER') {
    clearInterval(store.getState().timer.interval);
  }
  next(action);
};

class App extends React.Component {
  store = createStore(reducers, composeWithDevTools(
    applyMiddleware(timerMiddleware))
  );

  render() {
    return (
      <Provider store={this.store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
