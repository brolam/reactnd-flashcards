import React from 'react'
import DeckCard from '../components/DeckCard'

const deckDummy = { id: 'id-one', title: 'One Deck', amountOfCards: 10 }

test('renders without crashing', () => {
  const wrapper = shallow(<DeckCard {...deckDummy} />);
  expect(wrapper).toMatchSnapshot();
});

test('onSelect', () => {
  const spyOnPress = jest.fn();
  const deckCard = shallow(<DeckCard {...deckDummy}  onPress={spyOnPress} />);
  deckCard.simulate('press')
  expect(spyOnPress).toHaveBeenCalled();
});