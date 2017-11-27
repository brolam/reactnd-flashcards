import React from 'react'
import DeckCardList from '../components/DeckCardList'

test('renders without crashing', () => {
  const wrapper = shallow(<DeckCardList decks={deckDummies} />);
  expect(wrapper).toMatchSnapshot();
});

const deckDummies = [
  { id: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { id: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { id: 'three-item',title: 'Three Deck', amountOfCards: 12 }
]