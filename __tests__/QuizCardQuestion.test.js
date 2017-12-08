import React from 'react'
import QuizCardQuestion from '../components/QuizCardQuestion'

const quizzesDummy = [
  { question: 'One Quetion', answer:'One Answer' },
  { question: 'Two Quetion', answer:'Two Answer' },
  { question: 'Three Quetion', answer:'Three Answer' }
]
const deckDummy = { key: 'one-item', title: 'One Deck', amountOfCards: 3, quizzes: quizzesDummy }

test('renders without crashing', () => {
  const wrapper = shallow(<QuizCardQuestion
    deck={deckDummy}
    quizzes={quizzesDummy}
    selectedIndexQuiz={0} />);
  expect(wrapper).toMatchSnapshot();
});

test('show quiz answer', () => {
  const wrapper = shallow(<QuizCardQuestion
    deck={deckDummy}
    quizzes={quizzesDummy}
    selectedIndexQuiz={0}
    showQuizAnswer={true} />);
  expect(wrapper).toMatchSnapshot();
});