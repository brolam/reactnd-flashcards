import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'
import cardStyle from '../styles/cardStyles'
import buttonStyle from '../styles/buttonStyles'
import { white, blue, green, red } from '../styles/colors'

export default function QuizCardWrite() {
  return (
    <KeyboardAvoidingView
      style={[cardStyle, styles.container]}
      behavior='padding'
    >
      <View style={styles.containerTextInput}>
        <Text>Question</Text>
        <TextInput
          returnKeyType={"next"}
          blurOnSubmit={false}
          multiline={true}
          style={styles.textInput}
          placeholder="Enter with a question."
          onSubmitEditing={() => {
            this.inputAnswer.focus()
          }}
        />
      </View>
      <View style={styles.containerTextInput}>
        <Text>Answer</Text>
        <TextInput
          ref={input => {
            this.inputAnswer = input;
          }}
          returnKeyType={"done"}
          blurOnSubmit={true}
          multiline={true}
          style={styles.textInput}
          placeholder="Enter the answer to the question."
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonSaveAsCorrect]}
          onPress={() => console.log('on Save as correct')}>
          <Text style={styles.textButtons}>Save as Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonSaveAsIncorrect]}
          onPress={() => console.log('on Save as incorrect')}>
          <Text style={styles.textButtons}>Save as Incorrect</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 10
  },
  containerTextInput: { height: '30%' },
  textInput: { fontSize: 24, height: '90%', width: '100%' },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 5
  },
  buttonSaveAsCorrect: {
    backgroundColor: green,
    margin: 5
  },
  buttonSaveAsIncorrect: {
    backgroundColor: red,
    margin: 5
  },
  textButtons: {
    color: white,
    fontSize: 24
  },

});