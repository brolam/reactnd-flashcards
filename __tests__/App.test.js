import React from 'react';
import App from '../App';

test('renders without crashing', () => {
  const wrapper = shallow(<App isTwoPanels={false} />);
  expect(wrapper).toMatchSnapshot();
});

test('renders two panels without crashing', () => {
  const wrapper = shallow(<App isTwoPanels={true} />);
  expect(wrapper).toMatchSnapshot();
});

describe('new deck with one panel', () => {
  let app
  beforeEach(() => {
    app = mount(<App />);
  })

  test('show add Deck modal', () => {
    app.find('Button [title="Add"]').props().onPress()
    const { isAddingDeck } = app.state()
    expect(isAddingDeck).toBe(true)
  });

})