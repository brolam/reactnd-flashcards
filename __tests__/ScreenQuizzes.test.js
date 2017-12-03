import React from 'react'
import ScreenQuizzesConnected from '../components/ScreenQuizzes'
import { ScreenQuizzes } from '../components/ScreenQuizzes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import { receiveDecks, selectDeck, selectQuiz } from '../actions'

test('renders without crashing', () => {
  const wrapper = shallow(<ScreenQuizzes quizzes={quizzesDummy} />);
  expect(wrapper).toMatchSnapshot();
});

describe('browse the quizzes', () => {
  let screenQuizzesConnected

  beforeEach(() => {
    const store = createStore(reducer)
    store.dispatch(receiveDecks(deckDummies))
    store.dispatch(selectDeck(deckDummies[0].key, quizzesDummy))
    screenQuizzesConnected = mount(
      <Provider store={store}>
        <ScreenQuizzesConnected />
      </Provider>
    );
  })

  test('start quiz', () => {
    expect(screenQuizzesConnected.find('QuizCardStart').length).toEqual(1)
  });

  test('first quiz', () => {
    screenQuizzesConnected.find('TouchableOpacity [id="buttonStart"]').props().onPress()
    expect(screenQuizzesConnected.text()).toEqual('One Quetion')
  });

  test('show new quiz', () => {
    screenQuizzesConnected.find('TouchableOpacity [id="buttonAddQuiz"]').props().onPress()
    expect(screenQuizzesConnected.text()).toBe('QuestionAnswerSave as CorrectSave as Incorrect')
  });
})

const deckDummies = [
  { key: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { key: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { key: 'three-item', title: 'Three Deck', amountOfCards: 12 }
]

const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]