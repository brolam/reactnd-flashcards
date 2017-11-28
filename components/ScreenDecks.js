import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import DeckCardList from './DeckCardList'

export default function ScreenDecks({ decks }) {
  return (
    <View style={styles.container}>
      <DeckCardList decks={decks} />
    </View>
  )
}

ScreenDecks.propTypes = {
  decks: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
});