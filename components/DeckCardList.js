import React from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import DeckCard from './DeckCard'

export default function DeckCardList({ decks, onSelectedOneDeck }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSelectedOneDeck(item)}
          >
            <DeckCard
              key={item.id} {...item}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

DeckCardList.propTypes = {
  decks: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})