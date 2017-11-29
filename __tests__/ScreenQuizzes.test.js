import React from 'react'
import { ScreenQuizzes } from '../components/ScreenQuizzes'

test('renders without crashing', () => {
  const quizzesDummy = [
    { question: 'One Quetion' },
    { question: 'Two Quetion' },
    { question: 'Three Quetion' }
  ]
  const wrapper = shallow(<ScreenQuizzes quizzes = {quizzesDummy} />);
  expect(wrapper).toMatchSnapshot();
});