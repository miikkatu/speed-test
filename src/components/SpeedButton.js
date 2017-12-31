import color from 'color';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import * as actions from '../actions';

class SpeedButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: props.color,
      lit: props.id === props.lit.find(id => id === props.id)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      color: nextProps.color,
      lit: nextProps.id === nextProps.lit.find(id => id === nextProps.id)
    });
  }

  handlePress() {
    if (this.props.id === this.props.lit[0]) {
      this.props.rightPressed(this.props.id);
    } else {
      this.props.wrongPressed();
    }
  }

  getColorStyle(buttonColor, lit) {
    if (lit) {
      return {
        backgroundColor: buttonColor,
      }
    } else {
      return {
        backgroundColor: color(buttonColor).darken(0.5)
      }
    }
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => this.handlePress()}
        style={styles.button}
        title=""
      >
        <View style={[styles.button, this.getColorStyle(this.state.color, this.state.lit)]}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 150/2,
    height: 150,
    marginRight: 5,
    width: 150
  }
});


const mapStateToProps = state => ({
  lit: state.game.lit,
  score: state.game.score
});

const mapDispatchToProps = dispatch => ({
  rightPressed: (id) => {
    dispatch(actions.addScore());
    dispatch(actions.rightPressed({ id }));
  },
  wrongPressed: () => {
    dispatch({ type: 'STOP_TIMER' });
    dispatch(actions.endGame());
    dispatch(NavigationActions.navigate({ routeName: 'End' }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeedButton);
