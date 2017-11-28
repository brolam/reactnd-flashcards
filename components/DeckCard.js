import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import cardStyle from '../styles/cardStyles'

export default function DeckCard({ title, amountOfCards }) {
  return (
    <View style={cardStyle}>
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
  title: { fontSize: 24, textAlign: 'left', paddingTop: 8 },
  amountOfCards: { fontSize: 32, textAlign: 'right', }
});