import React from 'react'
import MockAsyncStorage from 'mock-async-storage'
const mockImpl = new MockAsyncStorage()
jest.mock('AsyncStorage', () => mockImpl)
import PanelQuizzes from '../components/PanelQuizzes'
import { getNewDeck, fetchDecks } from '../storage/index';
import { receiveDecks } from '../actions/index';

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
  expect(panelQuizzes.find('QuizCardQuestion').text()).toEqual('One Quetion')
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

function fillQuziCardWriteInputs(quizCardWrite){
  const textInputQuestion = quizCardWrite.find('TextInput').at(0)
  const textInputAnswer = quizCardWrite.find('TextInput').at(2)
  textInputQuestion.props().onChangeText('One Question')
  textInputAnswer.props().onChangeText('One Answer')
}

const deckDummy = { id: 'one-item', title: 'One Deck', amountOfCards: 10 }
const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]
