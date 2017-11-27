import React from 'react'
import { StyleSheet } from 'react-native'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { red } from '../styles/colors'

export default function AppStatusBar() {
  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusBar} barStyle="light-content" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight,
    backgroundColor: red,
  },
  statusBar: {
    backgroundColor: red,
  }
});