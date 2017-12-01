import React from 'react'
import PanelQuizzes from '../components/PanelQuizzes'

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

const deckDummy = { id: 'one-item', title: 'One Deck', amountOfCards: 10 }
const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]
