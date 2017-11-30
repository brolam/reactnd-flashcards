import React from 'react'
import { ScreenDecksAndQuizzes } from '../components/ScreenDecksAndQuizzes'
import ScreenDecksAndQuizzesConnected from '../components/ScreenDecksAndQuizzes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'


test('renders without crashing', () => {
  const wrapper = shallow(
    <ScreenDecksAndQuizzes
      decks={deckDummies}
      selectedDeckQuizzes={quizzesDummy}
    />);
  expect(wrapper).toMatchSnapshot();
});

test('on press add button', () => {
  const store = createStore(reducer)
  const screenDecksAndQuizzes = mount(
    <Provider store={store}>
      <ScreenDecksAndQuizzesConnected />
    </Provider>
  );
  screenDecksAndQuizzes.find('TouchableOpacity [id="addFabButton"]').props().onPress()
  expect(store.getState().appState).toBe('newDeck')
});

const deckDummies = [
  { id: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { id: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { id: 'three-item', title: 'Three Deck', amountOfCards: 12 }
]


const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]