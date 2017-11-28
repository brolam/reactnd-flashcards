import React from 'react'
import DecksAndQuizzesPanels from '../components/DecksAndQuizzesPanels'

test('renders without crashing', () => {
  const wrapper = shallow(<DecksAndQuizzesPanels decks={deckDummies} />);
  expect(wrapper).toMatchSnapshot();
});

const deckDummies = [
  { id: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { id: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { id: 'three-item',title: 'Three Deck', amountOfCards: 12 }
]