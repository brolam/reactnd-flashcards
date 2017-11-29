import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import DeckCard from './DeckCard'

export default function DeckCardList({ decks, onSelectedOneDeck }) {
  return (
    <FlatList
      data={decks}
      renderItem={({ item }) => <DeckCard
        {...item}
        onPress={() => onSelectedOneDeck(item)}
      />}
    />
  )
}

DeckCardList.propTypes = {
  decks: PropTypes.array.isRequired,
}