import React from 'react';
import { Animated } from 'react-native';

export default class FadeInViewAnimate extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 3,                   // Animate to opacity: 1 (opaque)
        duration: 8000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
          flexDirection: 'row',
          flex: 1,

        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
