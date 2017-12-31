import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);

const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
  tempNavState
);

export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Game' }),
        state
      );
      break;
    case 'Game':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'End' }),
        state
      );
      break;
    case 'End':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}
