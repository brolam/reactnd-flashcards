import React from 'react'
import { View, Button } from 'react-native'
import { ScreenDecks } from '../components/ScreenDecks'
import ScreenDecksConnected from '../components/ScreenDecks'
import { routes } from '../components/ScreenDecks'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'

test('renders without crashing', () => {
  const wrapper = shallow(<ScreenDecks decks={deckDummies} />);
  expect(wrapper).toMatchSnapshot();
});

test('add button event', () => {
  const mockParams = {
    navigation: { state: { params: { title: 'Decks' } } },
    screenProps: { onClickAddDeck: jest.fn(), }
  }
  const buttonAdd = new routes.Home.navigationOptions(mockParams).headerRight
  buttonAdd.props.onPress()
  expect(mockParams.screenProps.onClickAddDeck).toHaveBeenCalled();
});

test('edit button event', () => {
  const mockParams = {
    navigation: { state: { params: { title: 'Quiz' } } },
    screenProps: { onClickEditDeck: jest.fn(), }
  }
  const buttonEdit = new routes.Quizzes.navigationOptions(mockParams).headerRight
  buttonEdit.props.onPress()
  expect(mockParams.screenProps.onClickEditDeck).toHaveBeenCalled();
});

test('select a deck', () => {
  const spyDispatch = jest.fn()
  const spyNavigation = { navigate: jest.fn() }
  const screenDecks = mount(
    <ScreenDecks
      componentWillMount
      decks={deckDummies}
      dispatch={spyDispatch}
      navigation={spyNavigation}
    />);
  screenDecks.find('DeckCard').at(0).props().onPress()
  expect(spyDispatch).toHaveBeenCalled()
  expect(spyNavigation.navigate).toHaveBeenCalled()
});

const deckDummies = [
  { key: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { key: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { key: 'three-item', title: 'Three Deck', amountOfCards: 12 }
]