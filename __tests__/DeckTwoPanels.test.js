import React from 'react'
import DeckTwoPanels from '../components/DeckTwoPanels'

test('renders without crashing', () => {
  const wrapper = shallow(<DeckTwoPanels decks={deckDummies} />);
  expect(wrapper).toMatchSnapshot();
});

const deckDummies = [
  { id: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { id: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { id: 'three-item',title: 'Three Deck', amountOfCards: 12 }
]