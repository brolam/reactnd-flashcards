import React from 'react'
import QuizCardStart from '../components/QuizCardStart'

const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]
const deckDummy = { id: 'one-item', title: 'One Deck', amountOfCards: 10, quizzes: quizzesDummy }

test('renders without crashing', () => {
  const _24HoursInMilliseconds = 86400000
  const deckDummyScore99Percent = {
    ...quizzesDummy,
    score: 99.99,
    lastUpdated: Date.now() - _24HoursInMilliseconds
  }
  const wrapper = shallow(<QuizCardStart deck={deckDummyScore99Percent} quizzes={quizzesDummy} />);
  expect(wrapper).toMatchSnapshot();
});

test('onStart event', () => {
  let onStart = jest.fn()
  const quizCardStart = shallow(
    <QuizCardStart
      deck={deckDummy}
      quizzes={quizzesDummy}
      onStart={onStart}
    />);
  quizCardStart.find('TouchableOpacity [id="buttonStart"]').simulate('press')
  expect(onStart).toHaveBeenCalled();
});

test('renders today score', () => {
  const deckDummyScore99Percent = {
    ...quizzesDummy,
    score: 99,
    lastUpdated: Date.now()
  }
  const quizCardStart = shallow(
    <QuizCardStart
      deck={deckDummyScore99Percent}
      quizzes={quizzesDummy}
    />);
  expect(quizCardStart).toMatchSnapshot();
});
