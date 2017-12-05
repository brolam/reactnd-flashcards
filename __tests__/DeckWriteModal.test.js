import React from 'react'
import DeckWriteModal from '../components/DeckWriteModal'

test('renders without crashing', () => {
  const wrapper = shallow(<DeckWriteModal />);
  expect(wrapper).toMatchSnapshot();
});

test('onSave event', () => {
  const onSave = jest.fn()
  const deckWriteModal = mount(<DeckWriteModal onSave={onSave} />);
  const textInputTitle = deckWriteModal.find('TextInput').at(0)
  const buttonSave = deckWriteModal.find('TouchableOpacity').at(0)
  textInputTitle.instance().value = 'One Deck'
  buttonSave.props().onPress()
  expect(onSave).toHaveBeenCalled();
});

describe('save new Deck', () => {
  let deckWriteModal
  let onSave
  beforeEach(() => {
    onSave = jest.fn()
    deckWriteModal = mount(<DeckWriteModal onSave={onSave} />);
  })

  test('title is required', () => {
    const buttonSave = deckWriteModal.find('TouchableOpacity').at(0)
    buttonSave.props().onPress()
    expect(onSave).not.toHaveBeenCalled();
  });

})