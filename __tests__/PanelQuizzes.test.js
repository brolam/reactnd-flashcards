import React from 'react'
import PanelQuizzes from '../components/PanelQuizzes'

test('renders without crashing', () => {
  const quizzesDummy = [
    { question: 'One Quetion' },
    { question: 'Two Quetion' },
    { question: 'Three Quetion' }
  ]
  const wrapper = shallow(<PanelQuizzes quizzes = {quizzesDummy} />);
  expect(wrapper).toMatchSnapshot();
});