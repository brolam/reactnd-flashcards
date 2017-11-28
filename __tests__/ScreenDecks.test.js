import React from 'react'
import ScreenDecks from '../components/ScreenDecks'

test('renders without crashing', () => {
  const wrapper = shallow(<ScreenDecks decks={deckDummies} />);
  //expect(wrapper).toMatchSnapshot();
});

const deckDummies = [
  { id: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { id: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { id: 'three-item', title: 'Three Deck', amountOfCards: 12 }
]