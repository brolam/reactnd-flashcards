import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App Flashcards!</Text>
        <Text>Initial structure</Text>
      </View>
    );
  }
}
