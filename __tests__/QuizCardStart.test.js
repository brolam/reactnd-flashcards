import React from 'react'
import QuizCardStart from '../components/QuizCardStart'

test('renders without crashing', () => {
  const wrapper = shallow(<QuizCardStart deck={deckDummy} quizzes={quizzesDummy} />);
  expect(wrapper).toMatchSnapshot();
});

const deckDummy = { id: 'one-item', title: 'One Deck', amountOfCards: 10 }
const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]