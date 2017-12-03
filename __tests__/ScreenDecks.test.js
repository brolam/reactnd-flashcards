import React from 'react'
import { ScreenDecks } from '../components/ScreenDecks'
import ScreenDecksConnected from '../components/ScreenDecks'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'

test('renders without crashing', () => {
  const wrapper = shallow(<ScreenDecks decks={deckDummies} />);
  expect(wrapper).toMatchSnapshot();
});

const deckDummies = [
  { key: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { key: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { key: 'three-item', title: 'Three Deck', amountOfCards: 12 }
]