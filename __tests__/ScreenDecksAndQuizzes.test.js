import React from 'react'
import { ScreenDecksAndQuizzes } from '../components/ScreenDecksAndQuizzes'
import ScreenDecksAndQuizzesConnected from '../components/ScreenDecksAndQuizzes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import { receiveDecks, selectDeck } from '../actions'


const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]

const deckDummies = [
  { key: 'one-item', title: 'One Deck', amountOfCards: 3, quizzes: quizzesDummy },
  { key: 'two-item', title: 'Two Deck', amountOfCards: 3, quizzes: quizzesDummy },
  { key: 'three-item', title: 'Three Deck', amountOfCards: 3, quizzes: quizzesDummy }
]

test('renders without crashing', () => {
  const wrapper = shallow(
    <ScreenDecksAndQuizzes
      decks={deckDummies}
    />);
  expect(wrapper).toMatchSnapshot();
});

describe('browse the quizzes', () => {
  let screenDecksAndQuizzesConnected

  beforeEach(() => {
    const store = createStore(reducer)
    store.dispatch(receiveDecks(deckDummies))
    store.dispatch(selectDeck(deckDummies[0].key))
    screenDecksAndQuizzesConnected = mount(
      <Provider store={store}>
        <ScreenDecksAndQuizzesConnected />
      </Provider>
    );
  })

  test('select first Deck', () => {
    selectFirstDeck(screenDecksAndQuizzesConnected)
  });

  test('start quiz', () => {
    selectFirstDeck(screenDecksAndQuizzesConnected)
    screenDecksAndQuizzesConnected.find('TouchableOpacity [id="buttonStart"]').props().onPress()
    const panelQuizzes = screenDecksAndQuizzesConnected.find('PanelQuizzes')
    expect(panelQuizzes.text()).toEqual('1/3One Quetionshow answerCorrect?Incorrect?')
  });
  /*

  test('show add quiz', () => {
    selectFirstDeck(screenDecksAndQuizzesConnected)
    screenDecksAndQuizzesConnected.find('TouchableOpacity [id="buttonAddQuiz"]').props().onPress()
    const panelQuizzes = screenDecksAndQuizzesConnected.find('PanelQuizzes')
    expect(panelQuizzes.text()).toBe('QuestionAnswerSave as CorrectSave as Incorrect')
  });
  */
})

function selectFirstDeck(screenDecksAndQuizzesConnected) {
  screenDecksAndQuizzesConnected.find('DeckCard').at(0).props().onPress()
  expect(screenDecksAndQuizzesConnected.find('QuizCardStart').length).toEqual(1)
}

