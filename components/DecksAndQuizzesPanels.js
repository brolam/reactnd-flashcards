import React from 'react'
import { StyleSheet } from 'react-native'
import { View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import DeckCardList from './DeckCardList'

export default function DecksAndQuizzesPanels({ decks }) {
  return (
    <View style={styles.container} >
      <View style={styles.containerDeckList}>
        <DeckCardList decks={decks} />
      </View>
    </View>
  )
}

DecksAndQuizzesPanels.propTypes = {
  decks: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  containerDeckList: {
    width: '40%'
  }
})