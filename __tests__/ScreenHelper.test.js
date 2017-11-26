import React from 'react';
import { isPossibleTwoPanels } from '../util/ScreenHelper';

it('possible two panels', () => {
  expect(isPossibleTwoPanels({ width: 600 })).toBe(true);
});

it('not possible two panels', () => {
  expect(isPossibleTwoPanels({ width: 599 })).toBe(false);
});