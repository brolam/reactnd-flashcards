import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Platform } from 'react-native'
import { Constants } from 'expo'
import PropTypes from 'prop-types'
import { white, gray } from '../styles/colors'

export default function DeckCard({ title, amountOfCards }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amountOfCards}>{amountOfCards}</Text>
    </View>
  )
}

DeckCard.propTypes = {
  title: PropTypes.string.isRequired,
  amountOfCards: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  title: { fontSize: 24, textAlign: 'center' },
  amountOfCards: { fontSize: 18, color: gray }
});