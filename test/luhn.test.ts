import { describe, it, expect } from 'vitest';

import { luhn } from '../src/luhn.js';

describe('luhn()', () => {
  it('accepts string', () => {
    expect(luhn('4000000000001000')).toBeTruthy();
    expect(luhn('4000000000001001')).toBeFalsy();
  });

  it.each(['abc123', '4000-0000-0000-1000', ' 4000000000001000 '])(
    'strings with non-digit characters return false: %s',
    (input) => {
      expect(luhn(input)).toBeFalsy();
    },
  );
});
