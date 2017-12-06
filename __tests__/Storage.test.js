import MockAsyncStorage from 'mock-async-storage'

const mockImpl = new MockAsyncStorage()
jest.mock('AsyncStorage', () => mockImpl)

import { getNewDeck, setDecks, fetchDecks, setDeck } from '../storage'

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
    expect.assertions(2);
    fetchDecks().then(decks => {
      expect(decks[0]).toEqual(oneDeck)
      expect(decks[1]).toEqual(twoDeck)
    }).catch(reason => console.log(reason))

  });

  test('Set a new Deck', () => {
    const oneDeck = getNewDeck('One Deck')
    const twoDeck = getNewDeck('Two Deck')
    const threeDeck = getNewDeck('Three Deck')
    const startedDecks = [oneDeck, twoDeck]
    setDecks(startedDecks)
    expect.assertions(1);
    return setDeck(threeDeck).then( () => {
      fetchDecks().then(decks => {
        expect(decks[0]).toEqual(threeDeck)
      })
    })
  });

  test('Set an existing Deck', () => {
    const now = Date.now()
    const oneDeck = getNewDeck('One Deck')
    let twoDeck = {...getNewDeck('Two Deck'), lastUpdated:0}
    const startedDecks = [oneDeck, twoDeck]
    setDecks(startedDecks)
    const twoDeckUpdated = {...twoDeck, title:'Two Deck Updated' }
    expect.assertions(3);
    return setDeck(twoDeckUpdated).then(() => {
      fetchDecks().then( decks => {
        expect(decks.length).toBe(2)
        expect(decks[0].title).toBe('Two Deck Updated')
        expect(decks[0].lastUpdated).toBeGreaterThanOrEqual(now)
      })
    })
  });




})