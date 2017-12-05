
import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'FLASH_CARDS:DECKS'

function newKey() {
  return Math.random().toString(36).substr(-15)
}

export function getNewDeck(title, amountOfCards = 0) {
  return {
    key: newKey(),
    title,
    amountOfCards,
    lastUpdated: Date.now()
  }
}

export function setDecks(decks) {
  const stringifyDecks = JSON.stringify(decks)
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, stringifyDecks)
}

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(result => JSON.parse(result))
}

export const setDeck = deck => new Promise(function (then) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(result => {
      const lastDecksStored = JSON.parse(result)
      const updatedDecks = [deck, ...lastDecksStored]
      setDecks(updatedDecks).then(then())
    })
})