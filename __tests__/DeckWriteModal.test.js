import React from 'react'
import DeckWriteModal from '../components/DeckWriteModal'

test('renders without crashing', () => {
  const wrapper = shallow(<DeckWriteModal />);
  expect(wrapper).toMatchSnapshot();
});