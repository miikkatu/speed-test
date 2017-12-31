import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import EndScreen from './screens/EndScreen';
import GameScreen from './screens/GameScreen';
import HomeScreen from './screens/HomeScreen';

export const AppNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Game: { screen: GameScreen },
    End: { screen: EndScreen }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    }
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
