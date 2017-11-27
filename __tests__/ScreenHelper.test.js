import React from 'react';
import { isPossibleTwoPanels } from '../util/ScreenHelper';

it('possible two panels', () => {
  expect(isPossibleTwoPanels({ width: 800 })).toBe(true);
});

it('not possible two panels', () => {
  expect(isPossibleTwoPanels({ width: 799 })).toBe(false);
});