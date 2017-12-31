import color from 'color';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import * as actions from '../actions';

class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.highScore}>Highscore: {this.props.highScore}</Text>
          <TouchableOpacity
            onPress={() => this.props.handleStartGame()}
            style={{flex: 2}}
          >
            <Text style={styles.actionButton}>Start</Text>
          </TouchableOpacity>
          <View style={styles.buttonsContainer}>
            <View style={[styles.button, {backgroundColor: color('yellow').darken(0.5)}]} />
            <View style={[styles.button, {backgroundColor: color('green').darken(0.5)}]} />
            <View style={[styles.button, {backgroundColor: color('orange').darken(0.5)}]} />
            <View style={[styles.button, {backgroundColor: color('red').darken(0.5)}]} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButton: {
    color: 'white',
    fontSize: 30
  },
  button: {
    backgroundColor: 'grey',
    borderRadius: 150/2,
    height: 150,
    marginRight: 5,
    width: 150
  },
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
  highScore: {
    color: 'white',
    fontSize: 20,
    flex: 1
  }
});

const mapStateToProps = state => ({
  highScore: state.game.highScore
});

const mapDispatchToProps = dispatch => ({
  handleStartGame: () => {
    dispatch(actions.resetScore());
    dispatch(NavigationActions.navigate({ routeName: 'Game' }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
