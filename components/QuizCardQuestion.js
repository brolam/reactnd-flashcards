import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import cardStyle from '../styles/cardStyles'

export default function QuizCardQuestion({ question }) {
  return (
    <View style={cardStyle}>
      <Text style={styles.question}>{question}</Text>
    </View>
  )
}

QuizCardQuestion.propTypes = {
  question: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  question: { fontSize: 24, textAlign: 'center', paddingTop: 8 },
});