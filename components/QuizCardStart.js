import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import cardStyle from '../styles/cardStyles'
import buttonStyle from '../styles/buttonStyles'
import { white, green, red, orange, lightPurp } from '../styles/colors'

export default function QuizCardStart(
  { deck,
    quizzes,
    onStart = () => { },
    onAddQuiz = () => { }
  }) {
  return (
    <View style={[cardStyle, styles.container]}>
      <Text style={styles.amountOfCards}>Last Score 99% </Text>
      <Text style={styles.lastScore}>{deck.amountOfCards} cards</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonStart]}
          id="buttonStart"
          onPress={onStart}>
          <Text style={styles.textButtons} >Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonAdd]}
          id="buttonAddQuiz"
          onPress={onAddQuiz}>
          <Text style={styles.textButtons} >Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonEdit]}
          id="buttonEditQuiz"
          onPress={() => console.log('Edit quiz')}>
          <Text style={styles.textButtons} >Edit</Text>
        </TouchableOpacity>
      </View>
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
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 5
  },
  buttonStart: {
    backgroundColor: green,
    margin: 5
  },
  buttonAdd: {
    backgroundColor: orange,
    margin: 5
  },
  buttonEdit: {
    backgroundColor: lightPurp,
    margin: 5
  },
  textButtons: {
    color: white,
    fontSize: 32,
    fontWeight: '600',
    padding: 5,
  },
  lastScore: {
    fontSize: 42,
    textAlign: 'center',
    padding: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  amountOfCards: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 10,
  },
});