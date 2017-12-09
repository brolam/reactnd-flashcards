import React from 'react';

import MockAsyncStorage from 'mock-async-storage'
const mockImpl = new MockAsyncStorage()
jest.mock('AsyncStorage', () => mockImpl)
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

describe('new Deck Modal with two panels', () => {
  const app = mount(<App />);
  it('Add Deck with one panel', () => {
    app.find('Button [title="Add"]').props().onPress()
    expect(app.state().isAddingDeck).toBe(true)
    app.instance().onSaveDeck('One Deck')
  });

  test('check if Deck was added', () => {
    expect(app.state().isAddingDeck).toBe(false)
  });

})

describe('edit Deck with one panel', () => {
  const app = mount(<App />);
  app.instance().onSaveDeck('One Deck')
  test('edit and save Deck', () => {
    app.instance().onClickEditDeck()
    expect(app.state().isEditingDeck).toBe(true)
    app.instance().onSaveDeck('One Deck Edited')
  });

  test('saved Edit Deck', () => {
    expect(app.state().isEditingDeck).toBe(false)
  });

  test('cancel Edit Deck', () => {
    app.instance().onClickEditDeck()
    app.instance().onClickCancelAddDeck()
    expect(app.state().isEditingDeck).toBe(false)
  });
})