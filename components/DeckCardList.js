import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import DeckCard from './DeckCard'

export default function DeckCardList({ decks, onSelectedOneDeck }) {
  return (
    <FlatList
      data={decks}
      renderItem={({ item }) => <DeckCard
        key={item.id}
        {...item}
        onSelect={onSelectedOneDeck}
      />}
    />
  )
}

DeckCardList.propTypes = {
  decks: PropTypes.array.isRequired,
}