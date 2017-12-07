import React from 'react'
import MockAsyncStorage from 'mock-async-storage'
const mockImpl = new MockAsyncStorage()
jest.mock('AsyncStorage', () => mockImpl)
import PanelQuizzes, { nextQuiz } from '../components/PanelQuizzes'
import { getNewDeck, fetchDecks } from '../storage/index';
import { receiveDecks, selectQuiz } from '../actions/index';
import { createStore } from 'redux'
import reducer from '../reducers'

test('renders without crashing', () => {
  const wrapper = shallow(<PanelQuizzes quizzes={quizzesDummy} />);
  expect(wrapper).toMatchSnapshot();
});

test('there are not quizzes', () => {
  const wrapper = shallow(<PanelQuizzes quizzes={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test('start quiz', () => {
  const panelQuizzes = mount(<PanelQuizzes deck={deckDummy} quizzes={quizzesDummy} />);
  expect(panelQuizzes.find('QuizCardStart').length).toEqual(1)
});

test('first quiz', () => {
  const panelQuizzes = mount(
    <PanelQuizzes
      deck={deckDummy}
      quizzes={quizzesDummy}
      selectedIndexQuiz={0}
    />);
  expect(panelQuizzes.find('QuizCardQuestion').text()).toEqual('1/3One Quetionshow answerCorrect?Incorrect?')
});

test('write card', () => {
  const panelQuizzes = shallow(<PanelQuizzes quizzes={[]} isWriteCard={true} />);
  expect(panelQuizzes.find('QuizCardWrite').length).toEqual(1)
});

test('save a quiz', () => {
  mockImpl.clear()
  const spyDispatch = jest.fn()
  const deck = getNewDeck('One Deck')
  const panelQuizzes = mount(
    <PanelQuizzes
      deck={deck}
      selectedIndexQuiz={-1}
      quizzes={[]}
      isWriteCard={true}
      dispatch={spyDispatch}
    />);
  const quizCardWrite = panelQuizzes.find('QuizCardWrite')
  fillQuziCardWriteInputs(quizCardWrite)
  const buttonSaveCorrect = quizCardWrite.find('TouchableOpacity').at(0)
  buttonSaveCorrect.props().onPress()
  expect.assertions(1);
  fetchDecks().then(decks => {
    expect(decks.length).toEqual(1)
    expect(spyDispatch).toHaveBeenCalled()
  })
});

describe('navigate between cards', () => {
  let panelQuizzes
  let deck = { amountOfCards: 3 }
  let selectedIndexQuiz = 0
  const store = createStore(reducer)
  store.dispatch(selectQuiz(selectedIndexQuiz))
  beforeEach(() => {
    selectedIndexQuiz = store.getState().selectedIndexQuiz
    panelQuizzes = mount(
      <PanelQuizzes
        deck={deck}
        selectedIndexQuiz={selectedIndexQuiz}
        quizzes={quizzesDummy}
        dispatch={store.dispatch}
      />);
  })

  test('selected first quiz', () => {
    expect(panelQuizzes.find('QuizCardQuestion')
      .text()).toEqual('1/3One Quetionshow answerCorrect?Incorrect?')
  })

  it('try move next - Two Quetions', () => {
    nextQuiz(store.dispatch, selectedIndexQuiz, quizzesDummy)
  })

  test('moved next - Two Quetions', () => {
    expect(panelQuizzes.find('QuizCardQuestion').text())
      .toEqual('2/3Two Quetionshow answerCorrect?Incorrect?')
  })

  it('try move next - Three Quetions', () => {
    nextQuiz(store.dispatch, selectedIndexQuiz, quizzesDummy)
  })

  test('moved next - Three Quetions', () => {
    expect(panelQuizzes.find('QuizCardQuestion').text())
      .toEqual('3/3Three Quetionshow answerCorrect?Incorrect?')
  })

  it('try move to first when end of quetions', () => {
    nextQuiz(store.dispatch, selectedIndexQuiz, quizzesDummy)
  })

  test('moved to first when end of quetions', () => {
    expect(panelQuizzes.find('QuizCardQuestion')
      .text()).toEqual('1/3One Quetionshow answerCorrect?Incorrect?')
  })


})

function fillQuziCardWriteInputs(quizCardWrite) {
  const textInputQuestion = quizCardWrite.find('TextInput').at(0)
  const textInputAnswer = quizCardWrite.find('TextInput').at(2)
  textInputQuestion.props().onChangeText('One Question')
  textInputAnswer.props().onChangeText('One Answer')
}

const deckDummy = { key: 'one-item', title: 'One Deck', amountOfCards: 3 }
const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]
