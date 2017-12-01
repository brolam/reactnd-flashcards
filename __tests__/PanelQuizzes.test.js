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

describe('browse the quizzes', () => {
  let panelQuizzes

  beforeEach(() => {
    panelQuizzes = mount(<PanelQuizzes deck={deckDummy} quizzes={quizzesDummy} />);
  })

  test('start quiz', () => {
    expect(panelQuizzes.find('QuizCardStart').length).toEqual(1)
  });
})

const deckDummy = { id: 'one-item', title: 'One Deck', amountOfCards: 10 }
const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]
