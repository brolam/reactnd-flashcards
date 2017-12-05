import MockAsyncStorage from 'mock-async-storage'

const mockImpl = new MockAsyncStorage()
jest.mock('AsyncStorage', () => mockImpl)

import { getNewDeck, setDecks, fetchDecks } from '../storage'

describe('storage Decks', () => {

  test('new Deck', () => {
    const now = Date.now()
    const newDeck = getNewDeck('One Deck')
    expect(newDeck.key).toHaveLength(15)
    expect(newDeck.title).toEqual('One Deck')
    expect(newDeck.amountOfCards).toEqual(0)
    expect(newDeck.lastUpdated).toBeGreaterThanOrEqual(now)
  })

  test('save and fetch Decks', () => {
    const oneDeck = getNewDeck('One Deck')
    const twoDeck = getNewDeck('Two Deck')
    const decks = [oneDeck, twoDeck]
    setDecks(decks)
    fetchDecks().then(decks => {
      expect(decks[0]).toEqual(oneDeck)
      expect(decks[1]).toEqual(twoDeck)
    }).catch(reason => console.log(reason))

  });
})