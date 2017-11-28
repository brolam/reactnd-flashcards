import React from 'react'
import DeckCard from '../components/DeckCard'

const deckDummy = { id: 'id-one', title: 'One Deck', amountOfCards: 10 }

test('renders without crashing', () => {
  const wrapper = shallow(<DeckCard {...deckDummy} />);
  expect(wrapper).toMatchSnapshot();
});

test('onSelect', () => {
  let selectedDeckId = '-1'
  const onSelect = (deckId) => { selectedDeckId = deckId }
  const deckCard = shallow(<DeckCard {...deckDummy}  onSelect={onSelect} />);
  deckCard.simulate('press')
  expect(selectedDeckId).toBe(deckDummy.id)
});