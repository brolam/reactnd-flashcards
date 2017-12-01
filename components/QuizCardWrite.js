import React from 'react'
import { StyleSheet } from 'react-native'
import { View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import cardStyle from '../styles/cardStyles'

export default function QuizCardWrite() {
  return (
    <View style={cardStyle}>
      <TextInput
        style={styles.question}
        placeholder="Enter with a question."
      />
      <TextInput
        style={styles.answer}
        placeholder="Enter the answer to the question."
      />
    </View>
  )
}

const styles = StyleSheet.create({
  question: { height: 40 },
  answer: { height: 40 },
});