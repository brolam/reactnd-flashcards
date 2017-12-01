import React from 'react'
import QuizCardWrite from '../components/QuizCardWrite'

test('renders without crashing', () => {
  const wrapper = shallow(<QuizCardWrite />);
  expect(wrapper).toMatchSnapshot();
});