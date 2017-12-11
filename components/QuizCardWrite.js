import React from 'react'
import { StyleSheet, Text, Alert } from 'react-native'
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'
import cardStyle from '../styles/cardStyles'
import buttonStyle from '../styles/buttonStyles'
import { white, blue, green, red } from '../styles/colors'

export default function QuizCardWrite({
  quiz = { question: '', answer: '' },
  onSave = (question, answer, answerExpect) => { } }) {

  const defaultQuestion = quiz.question
  const defaultAnswer = quiz.answer
  let textInputQuestion = {}
  let textInputAnswer = {}

  function parseFields(answerExpect) {
    const question = textInputQuestion.value ? textInputQuestion.value : defaultQuestion
    const answer = textInputAnswer.value ? textInputAnswer.value : defaultAnswer
    if (!question || question.length == 0) {
      textInputQuestion.focus()
      Alert.alert('Question is required!')
      return
    }
    if (!answer || answer.length == 0) {
      textInputAnswer.focus()
      Alert.alert('Answer is required!')
      return
    }
    onSave(question, answer, answerExpect)
  }
  return (
    <KeyboardAvoidingView
      style={[cardStyle, styles.container]}
      behavior='padding'
    >
      <View style={styles.containerTextInput}>
        <Text>Question</Text>
        <TextInput
          ref={input => { textInputQuestion = input }}
          returnKeyType={"next"}
          blurOnSubmit={false}
          multiline={true}
          style={styles.textInput}
          placeholder="Enter with a question."
          onSubmitEditing={() => {
            textInputAnswer.focus()
          }}
          onChangeText={text => textInputQuestion.value = text}
          defaultValue={defaultQuestion}
        />
      </View>
      <View style={styles.containerTextInput}>
        <Text>Answer</Text>
        <TextInput
          ref={input => { textInputAnswer = input }}
          returnKeyType={"done"}
          blurOnSubmit={true}
          multiline={true}
          style={styles.textInput}
          placeholder="Enter the answer to the question."
          onChangeText={text => textInputAnswer.value = text}
          defaultValue={defaultAnswer}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonSaveAsCorrect]}
          onPress={() => parseFields(true)}>
          <Text style={styles.textButtons}>Save as Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonSaveAsIncorrect]}
          onPress={() => parseFields(false)}>
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