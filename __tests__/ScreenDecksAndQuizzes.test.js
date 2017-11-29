import React from 'react'
import { ScreenDecksAndQuizzes } from '../components/ScreenDecksAndQuizzes'

test('renders without crashing', () => {
  const wrapper = shallow(
    <ScreenDecksAndQuizzes
      decks={deckDummies}
      selectedDeckQuizzes={quizzesDummy}
    />);
  expect(wrapper).toMatchSnapshot();
});

const deckDummies = [
  { id: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { id: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { id: 'three-item', title: 'Three Deck', amountOfCards: 12 }
]


const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]