import { StyleSheet } from 'react-native';
import { View, Text, Platform } from 'react-native'
import { white, purple } from './colors'

const buttonStyles = StyleSheet.create({
  button:{
    alignItems: 'center',
  },
  androidButton: {
    margin: 5,
    backgroundColor: purple,
    padding: 10,
    borderRadius: 2,
  },
  iosButton: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
  }
})

export default buttonStyle = [buttonStyles.button,
  Platform.OS === 'ios' ? buttonStyles.iosButton : buttonStyles.androidButton
]
