import React from 'react';
import App from '../App';

test('renders without crashing', () => {
  const wrapper = shallow(<App isTwoPanels={false} />);
  expect(wrapper).toMatchSnapshot();
});

test('renders two panels without crashing', () => {
  const wrapper = shallow(<App isTwoPanels={true} />);
  expect(wrapper).toMatchSnapshot();
});