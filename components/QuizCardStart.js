import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import cardStyle from '../styles/cardStyles'

export default function QuizCardStart({ deck, quizzes, onStart = () => { } }) {
  return (
    <View style={cardStyle}>
      <Text style={styles.temp}>{deck.title}</Text>
      <Text style={styles.temp}>{deck.amountOfCards} card(s)</Text>
      <TouchableOpacity  id="buttonStart" onPress={onStart}>
        <Text style={styles.temp} >Start</Text>
      </TouchableOpacity>
    </View>
  )
}

QuizCardStart.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
  quizzes: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  temp: { fontSize: 24, textAlign: 'center', paddingTop: 8 },
});