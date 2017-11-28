import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import cardStyle from '../styles/cardStyles'

export default function DeckCard({
  id,
  title,
  amountOfCards,
  onSelect = (deckId) => { }
  }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
    >
      <View style={cardStyle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amountOfCards}>{amountOfCards}</Text>
      </View>
    </TouchableOpacity >
  )
}

DeckCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amountOfCards: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  title: { fontSize: 24, textAlign: 'left', paddingTop: 8 },
  amountOfCards: { fontSize: 32, textAlign: 'right', }
});