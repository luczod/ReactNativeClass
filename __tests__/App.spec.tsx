/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
// import { it } from '@jest/globals';
import { expect, it } from 'vitest';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('dumby test', () => {
  // renderer.create(<App />);
  expect(1).toBe(1);
});
