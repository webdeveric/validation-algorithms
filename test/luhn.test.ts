import { describe, it, expect } from 'vitest';

import { luhn } from '../src/luhn.js';

describe('luhn()', () => {
  it('accepts string', () => {
    expect(luhn('4000000000001000')).toBeTruthy();
    expect(luhn('4000000000001001')).toBeFalsy();
  });

  it('accepts bigint', () => {
    expect(luhn(4000000000001000n)).toBeTruthy();
    expect(luhn(4000000000001001n)).toBeFalsy();
  });

  it('accepts number', () => {
    expect(luhn(4000000000001000)).toBeTruthy();
    expect(luhn(4000000000001001)).toBeFalsy();
  });

  it.each(['not a credit card number', '-1', Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])(
    'returns false when giving bad input: %s',
    (input) => {
      expect(luhn(input)).toBeFalsy();
    },
  );
});
