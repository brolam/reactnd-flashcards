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

describe('new Deck Modal with one panel', () => {
  let app
  beforeEach(() => {
    app = mount(<App />);
  })

  test('show add Deck modal', () => {
    app.find('Button [title="Add"]').props().onPress()
    expect(app.state().isAddingDeck).toBe(true)
  });

  test('cancel add Deck modal', () => {
    app.find('Button [title="Add"]').props().onPress()
    app.instance().onClickCancelAddDeck()
    expect(app.state().isAddingDeck).toBe(false)    
  });

})

describe('new Deck Modal with two panels', () => {
  let app
  beforeEach(() => {
    app = mount(<App isTwoPanels={true} />);
  })

  test('show add Deck modal', () => {
    app.find('TouchableOpacity [id="addFabButton"]').props().onPress()
    expect(app.state().isAddingDeck).toBe(true)
  });

  test('cancel add Deck modal', () => {
    app.find('TouchableOpacity [id="addFabButton"]').props().onPress()
    app.instance().onClickCancelAddDeck()
    expect(app.state().isAddingDeck).toBe(false)    
  });

})