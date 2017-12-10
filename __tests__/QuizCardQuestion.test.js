import React from 'react'
import QuizCardQuestion from '../components/QuizCardQuestion'
import { showQuizAnswer } from '../actions/index';

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

test('dispatch show quiz answer', () => {
  const spyDispatch = jest.fn()
  const quizCardQuestion = mount(<QuizCardQuestion
    deck={deckDummy}
    quizzes={quizzesDummy}
    selectedIndexQuiz={0}
    dispatch={spyDispatch} />);
    const buttonShowAnswer = quizCardQuestion.find('TouchableOpacity').at(1)
    buttonShowAnswer.props().onPress()
    expect(spyDispatch).toHaveBeenCalledWith(showQuizAnswer(true))
});

test('dispatch show quiz question', () => {
  const spyDispatch = jest.fn()
  const quizCardQuestion = mount(<QuizCardQuestion
    deck={deckDummy}
    quizzes={quizzesDummy}
    selectedIndexQuiz={0}
    showQuizAnswer={true}
    dispatch={spyDispatch} />);
    const buttonShowQuestion = quizCardQuestion.find('TouchableOpacity').at(1)
    buttonShowQuestion.props().onPress()
    expect(spyDispatch).toHaveBeenCalledWith(showQuizAnswer(false))
});


test('on click button answer incorrect', () => {
  const spyOnAnswer = jest.fn()
  const quizCardQuestion = mount(<QuizCardQuestion
    deck={deckDummy}
    quizzes={quizzesDummy}
    selectedIndexQuiz={0}
    showQuizAnswer={true}
    onAnswer={spyOnAnswer} />);
    const buttonAnswerIncorrect = quizCardQuestion.find('TouchableOpacity').at(3)
    buttonAnswerIncorrect.props().onPress()
    expect(spyOnAnswer).toHaveBeenCalled()
});