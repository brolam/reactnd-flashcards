import React from 'react'
import DeckWriteModal from '../components/DeckWriteModal'

test('renders without crashing', () => {
  const wrapper = shallow(<DeckWriteModal />);
  expect(wrapper).toMatchSnapshot();
});

test('onSave event', () => {
  const onSave = jest.fn()
  const deckWriteModal = mount(<DeckWriteModal onSave={onSave} />);
  const buttonSave = deckWriteModal.find('TouchableOpacity').at(0)
  buttonSave.props().onPress()
  expect(onSave).toHaveBeenCalled();
});
