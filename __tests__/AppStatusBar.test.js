import React from 'react'
import AppStatusBar from '../components/AppStatusBar'

test('renders without crashing', () => {
  const wrapper = shallow(<AppStatusBar />);
  expect(wrapper).toMatchSnapshot();
});