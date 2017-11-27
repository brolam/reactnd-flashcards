import React from 'react'
import { StyleSheet } from 'react-native'
import { View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import DeckCard from '../components/DeckCard'

export default function DeckCardList({ decks }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        renderItem={({item}) => <DeckCard key={item.id} {...item} />}
      />
    </View>
  )
}

DeckCardList.propTypes = {
  decks: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
})