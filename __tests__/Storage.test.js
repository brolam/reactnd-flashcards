import MockAsyncStorage from 'mock-async-storage'
const mockImpl = new MockAsyncStorage()
jest.mock('AsyncStorage', () => mockImpl)
import {
  getNewDeck,
  setDecks,
  fetchDecks,
  setDeck,
  getNewQuiz,
  setQuiz,
  startDeckQuiz,
  isReminderSetted,
  setReminder
} from '../storage'

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
    return setDeck(threeDeck).then(() => {
      fetchDecks().then(decks => {
        expect(decks[0]).toEqual(threeDeck)
      })
    })
  });

  test('Set an existing Deck', () => {
    const now = Date.now()
    const oneDeck = getNewDeck('One Deck')
    let twoDeck = { ...getNewDeck('Two Deck'), lastUpdated: 0 }
    const startedDecks = [oneDeck, twoDeck]
    setDecks(startedDecks)
    const twoDeckUpdated = { ...twoDeck, title: 'Two Deck Updated' }
    expect.assertions(3);
    return setDeck(twoDeckUpdated).then(() => {
      fetchDecks().then(decks => {
        expect(decks.length).toBe(2)
        expect(decks[0].title).toBe('Two Deck Updated')
        expect(decks[0].lastUpdated).toBeGreaterThanOrEqual(now)
      })
    })
  });
})

describe('storage Quiz', () => {
  mockImpl.clear()
  const now = Date.now()
  let oneDeck = getNewDeck('One Deck')
  const doneExpects = true

  test('new Quiz', () => {
    const newQuiz = getNewQuiz('One Question', 'One Answer', true)
    expect(newQuiz.key).toHaveLength(15)
    expect(newQuiz.question).toBe('One Question')
    expect(newQuiz.answer).toBe('One Answer')
    expect(newQuiz.answerExpect).toBe(true)
    expect(newQuiz.answered).toBe(undefined)
  })

  test('set One Quiz', () => {
    const oneQuiz = getNewQuiz('One Question', 'One Answer', true, true)
    expect.assertions(9);
    setQuiz(oneDeck, oneQuiz).then(function (decks) {
      oneDeck = decks[0]
      expect(oneDeck.title).toBe('One Deck')
      expect(oneDeck.lastUpdated).toBeGreaterThanOrEqual(now)
      expect(oneDeck.amountOfCards).toBe(1)
      expect(oneDeck.quizzes.length).toBe(1)
      expect(oneDeck.quizzes[0].question).toBe('One Question')
      expect(oneDeck.quizzes[0].answer).toBe('One Answer')
      expect(oneDeck.quizzes[0].answerExpect).toBe(true)
      expect(oneDeck.quizzes[0].answered).toBe(true)
      expect(doneExpects).toBe(true)
    })
  })

  test('update One Quiz', () => {
    oneDeck.quizzes[0].answered = false
    expect.assertions(3);
    setDeck(oneDeck).then((decks) => {
      oneDeck = decks[0]
      expect(oneDeck.quizzes.length).toBe(1)
      expect(oneDeck.quizzes[0].answered).toBe(false)
      expect(doneExpects).toBe(true)
    })
  })

  test('Add Two Quiz', () => {
    const twoQuiz = getNewQuiz('Two Question', 'Two Answer', true, true)
    expect.assertions(6);
    setQuiz(oneDeck, twoQuiz).then((decks) => {
      oneDeck = decks[0]
      expect(oneDeck.quizzes.length).toBe(2)
      expect(oneDeck.quizzes[0].question).toBe('Two Question')
      expect(oneDeck.quizzes[0].answer).toBe('Two Answer')
      expect(oneDeck.quizzes[0].answerExpect).toBe(true)
      expect(oneDeck.quizzes[0].answered).toBe(true)
      expect(doneExpects).toBe(true)
    })
  })
})

describe('calculate score', () => {
  mockImpl.clear()
  let oneDeck = getNewDeck('One Deck')
  const doneExpects = true
  setDeck(oneDeck).then(decks => {
    oneDeck = decks[0]
    setQuiz(oneDeck, getNewQuiz('Five Question', 'Five Answer', true))
    setQuiz(oneDeck, getNewQuiz('Four Question', 'Four Answer', true))
    setQuiz(oneDeck, getNewQuiz('Three Question', 'Three Answer', false))
    setQuiz(oneDeck, getNewQuiz('Two Question', 'Two Answer', true))
    setQuiz(oneDeck, getNewQuiz('One Question', 'One Answer', true))
  })

  test('score equal zero', () => {
    expect(oneDeck.score).toEqual(0)
  })

  test('score equal 10%', () => {
    oneDeck.quizzes[0].answered = true
    expect.assertions(2);
    setDeck(oneDeck).then(decks => {
      oneDeck = decks[0]
      expect(oneDeck.score).toBe(20)
      expect(doneExpects).toBe(true)
    })
  })

  test('score equal 60%', () => {
    oneDeck.quizzes[0].answered = true
    oneDeck.quizzes[1].answered = true
    oneDeck.quizzes[2].answered = false
    expect.assertions(2);
    setDeck(oneDeck).then(decks => {
      oneDeck = decks[0]
      expect(oneDeck.score).toBe(60)
      expect(doneExpects).toBe(true)
    })
  })

  test('score equal 100%', () => {
    oneDeck.quizzes[0].answered = true
    oneDeck.quizzes[1].answered = true
    oneDeck.quizzes[2].answered = false
    oneDeck.quizzes[3].answered = true
    oneDeck.quizzes[4].answered = true
    expect.assertions(2);
    setDeck(oneDeck).then(decks => {
      oneDeck = decks[0]
      expect(oneDeck.score).toBe(100)
      expect(doneExpects).toBe(true)
    })
  })

  test('start quiz', () => {
    expect.assertions(2);
    startDeckQuiz(oneDeck).then(decks => {
      oneDeck = decks[0]
      expect(oneDeck.score).toBe(0)
      expect(doneExpects).toBe(true)
    })
  })

})

describe('reminder setted', () => {
  mockImpl.clear()
  const doneExpects = true

  test('init reminder setted', () => {
    mockImpl.clear()
    expect.assertions(2);
    isReminderSetted().then(milliseconds => {
      expect(milliseconds).toBe(undefined)
      expect(doneExpects).toBe(true)
    })
  })

  it('set reminder', () => {
    setReminder(true)
  })

  test('reminder setted', () => {
    expect.assertions(2);
    isReminderSetted().then(reminderSetted => {
      expect(reminderSetted).toBe(true)
      expect(doneExpects).toBe(true)
    })
  })

})