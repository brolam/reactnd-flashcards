import React from 'react'
import QuizCardQuestion from '../components/QuizCardQuestion'

const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]
const deckDummy = { key: 'one-item', title: 'One Deck', amountOfCards: 3, quizzes: quizzesDummy }

test('renders without crashing', () => {
  const wrapper = shallow(<QuizCardQuestion
    deck={deckDummy}
    quizzes={quizzesDummy}
    selectedIndexQuiz={0} />);
  expect(wrapper).toMatchSnapshot();
});