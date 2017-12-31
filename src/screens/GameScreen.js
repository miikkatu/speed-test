import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import * as actions from '../actions';

import SpeedButton from '../components/SpeedButton';

class GameScreen extends React.Component {
  constructor(props) {
    super(props);

    this.props.resetScore();
    this.props.lightFirst();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.score}>{this.props.score}</Text>
          <View style={styles.buttonsContainer}>
            <SpeedButton id={1} color="yellow" />
            <SpeedButton id={2} color="green" />
            <SpeedButton id={3} color="orange" />
            <SpeedButton id={4} color="red" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 200,
    paddingLeft: 5,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: '#ba0000',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  score: {
    color: 'white',
    fontSize: 30,
    fontStyle: 'italic',
    flex: 1,
    marginTop: 10
  },
});

const mapStateToProps = state => ({
  lit: state.game.lit,
  score: state.game.score
});

const mapDispatchToProps = dispatch => ({
  lightFirst: () => {
    setTimeout(() => {
      dispatch({ type: 'START_TIMER' });
      dispatch(actions.lightFirst());
    }, 1000);
  },
  resetScore: () => {
    dispatch(actions.resetScore());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen);
