import React from 'react';
import { Text, View } from 'react-native';
import appStyles from './styles/appStyles'
import AppStatusBar from './components/AppStatusBar'

export default class App extends React.Component {
  render() {
    return (
      <View style={appStyles.container}>
        <AppStatusBar />
        <Text>App Flashcards!</Text>
        <Text>Initial structure</Text>
      </View>
    );
  }
}
