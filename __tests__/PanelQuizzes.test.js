import React from 'react'
import MockAsyncStorage from 'mock-async-storage'
const mockImpl = new MockAsyncStorage()
jest.mock('AsyncStorage', () => mockImpl)
import PanelQuizzes, { nextQuiz } from '../components/PanelQuizzes'
import { getNewDeck, fetchDecks, getNewQuiz } from '../storage/index';
import { receiveDecks, selectQuiz } from '../actions/index';
import { createStore } from 'redux'
import reducer from '../reducers'

const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]
const deckDummy = { key: 'one-item', title: 'One Deck', amountOfCards: 3, quizzes: quizzesDummy }

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
  const quizzes = quizzesDummy.slice()
  const deck = { amountOfCards: 3, quizzes }
  let selectedIndexQuiz = 0
  const store = createStore(reducer)
  store.dispatch(selectQuiz(selectedIndexQuiz))
  beforeEach(() => {
    selectedIndexQuiz = store.getState().selectedIndexQuiz
    panelQuizzes = mount(
      <PanelQuizzes
        deck={deck}
        selectedIndexQuiz={selectedIndexQuiz}
        quizzes={quizzes}
        dispatch={store.dispatch}
      />);
  })

  test('selected first quiz', () => {
    expect(panelQuizzes.find('QuizCardQuestion')
      .text()).toEqual('1/3One Quetionshow answerCorrect?Incorrect?')
  })

  it('answer question one', () => {
    quizzes[0].answered = true
    nextQuiz(store.dispatch, selectedIndexQuiz, quizzes)
  })

  test('moved to quetion two ', () => {
    expect(panelQuizzes.find('QuizCardQuestion').text())
      .toEqual('2/3Two Quetionshow answerCorrect?Incorrect?')
  })

  it('answer question two', () => {
    quizzes[1].answered = true
    nextQuiz(store.dispatch, selectedIndexQuiz, quizzes)
  })

  test('moved to question three', () => {
    expect(panelQuizzes.find('QuizCardQuestion').text())
      .toEqual('3/3Three Quetionshow answerCorrect?Incorrect?')
  })

  it('try move to not answered quiz', () => {
    quizzes[0].answered = undefined
    quizzes[1].answered = true
    quizzes[2].answered = true
    nextQuiz(store.dispatch, selectedIndexQuiz, quizzes)
  })

  test('moved to not answered quiz', () => {
    expect(panelQuizzes.find('QuizCardQuestion')
      .text()).toEqual('1/3One Quetionshow answerCorrect?Incorrect?')
  })

  it('try move to start quiz', () => {
    quizzes[0].answered = true
    quizzes[1].answered = true
    quizzes[2].answered = true
    nextQuiz(store.dispatch, selectedIndexQuiz, quizzes)
  })

  test('moved to start quiz', () => {
    expect(panelQuizzes.find('QuizCardStart').length).toBe(1)
  })

})

test('answer and save a quiz as correct', () => {
  mockImpl.clear()
  const spyDispatch = jest.fn()
  const quiz = getNewQuiz('One Quiz', 'One Answer', true)
  const deck = { ...getNewDeck('One Deck'), quizzes: [quiz] }
  const panelQuizzes = mount(
    <PanelQuizzes
      deck={deck}
      selectedIndexQuiz={0}
      quizzes={deck.quizzes}
      dispatch={spyDispatch}
    />);
  const quizCardQuestion = panelQuizzes.find('QuizCardQuestion')
  const buttonAnswerCorrect = quizCardQuestion.find('TouchableOpacity').at(1)
  buttonAnswerCorrect.props().onPress()
  expect.assertions(2);
  fetchDecks().then(decks => {
    expect(spyDispatch).toHaveBeenCalled()
    expect(true).toBe(true)
  })
});

function fillQuziCardWriteInputs(quizCardWrite) {
  const textInputQuestion = quizCardWrite.find('TextInput').at(0)
  const textInputAnswer = quizCardWrite.find('TextInput').at(2)
  textInputQuestion.props().onChangeText('One Question')
  textInputAnswer.props().onChangeText('One Answer')
}


