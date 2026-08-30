import { describe, it, expect } from 'vitest';

import { safeLuhn } from '../src/safeLuhn.js';

describe('safeLuhn()', () => {
  it('accepts string', () => {
    expect(safeLuhn('4000000000001000')).toBeTruthy();
    expect(safeLuhn('4000000000001001')).toBeFalsy();
  });

  it('accepts bigint', () => {
    expect(safeLuhn(4000000000001000n)).toBeTruthy();
    expect(safeLuhn(4000000000001001n)).toBeFalsy();
  });

  it('accepts number', () => {
    expect(safeLuhn(4000000000001000)).toBeTruthy();
    expect(safeLuhn(4000000000001001)).toBeFalsy();
  });

  it('accepts a valid bigint beyond Number.MAX_SAFE_INTEGER', () => {
    expect(safeLuhn(400000000000000000000002n)).toBeTruthy();
  });

  it.each(['', ' ', 'not a credit card number', '4000-0000-0000-1000', ' 4000000000001000 ', '-1'])(
    'strings with non-digit characters return false: "%s"',
    (input) => {
      expect(safeLuhn(input)).toBeFalsy();
    },
  );

  it.each([Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NaN, -1, 1.5, -0.5])(
    'invalid numbers return false: %s',
    (input) => {
      expect(safeLuhn(input)).toBeFalsy();
    },
  );

  it.each([1e21, 1e22])('numbers at or beyond 1e21 return false: %s', (input) => {
    expect(safeLuhn(input)).toBeFalsy();
  });

  it('negative bigints return false', () => {
    expect(safeLuhn(-1n)).toBeFalsy();
  });

  it('zero is valid', () => {
    expect(safeLuhn(0)).toBeTruthy();
    expect(safeLuhn(0n)).toBeTruthy();
    expect(safeLuhn('0')).toBeTruthy();
  });

  it.each([{}, [], null, undefined, Symbol()])(
    'non string, non-number, non-bigint input returns false: %s',
    (input: unknown) => {
      expect(safeLuhn(input as never)).toBeFalsy();
    },
  );
});
