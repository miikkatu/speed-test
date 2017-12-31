import color from 'color';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import * as actions from '../actions';

class EndScreen extends React.Component {
  constructor(props) {
    super(props);

    if (props.score > props.highScore) {
      this.state = {
        newHighScore: true
      }
      this.props.setNewHighScore(props.score);
    } else {
      this.state = {
        newHighScore: false
      }
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.score}>{this.props.score}</Text>
          {this.state.newHighScore &&
            <Text style={styles.highScore}>New highscore!</Text>
          }
          <View style={styles.actionButtons}>
            <TouchableOpacity
              onPress={() => navigate('Game', { score: 0 })}
              style={{marginRight: 20}}
            >
              <Text style={styles.actionButton}>Try again?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Home', { score: 0 })}
              style={{marginLeft: 20}}
            >
              <Text style={styles.actionButton}>End</Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 30,
  },
  actionButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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
  highScore: {
    color: 'white',
    fontSize: 20,
    flex: 1
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
  }
});

const mapStateToProps = state => ({
  highScore: state.game.highScore,
  score: state.game.score
});

const mapDispatchToProps = dispatch => ({
  setNewHighScore: (score) => {
    dispatch(actions.setHighScore({
      score
    }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndScreen);
