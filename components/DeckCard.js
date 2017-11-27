import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Platform } from 'react-native'
import PropTypes from 'prop-types'
import { white, gray } from '../styles/colors'

export default function DeckCard({ title, amountOfCards }) {
  return (
    <View style={[
      styles.card,
      Platform.OS === 'ios' ? styles.cardIOS : styles.cardAndroid
    ]}>
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
  card: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: white,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
  },
  cardIOS: {
    borderRadius: 8,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  cardAndroid: {
    borderRadius: 4,
    shadowRadius: 2,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2,
    borderColor: '#ddd',
  },
  title: { fontSize: 24, textAlign: 'left', paddingTop: 8 },
  amountOfCards: { fontSize: 32, textAlign: 'right', }
});