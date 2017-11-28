import React from 'react'
import QuizCardQuestion from '../components/QuizCardQuestion'

test('renders without crashing', () => {
  const quizDummy = { question: 'One Quetion'}
  const wrapper = shallow(<QuizCardQuestion {...quizDummy} />);
  expect(wrapper).toMatchSnapshot();
});