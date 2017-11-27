import React from 'react'
import DeckCard from '../components/DeckCard'

test('renders without crashing', () => {
  const deckDummy = { title: 'One Deck', amountOfCards: 10 }
  const wrapper = shallow(<DeckCard {...deckDummy} />);
  expect(wrapper).toMatchSnapshot();
});