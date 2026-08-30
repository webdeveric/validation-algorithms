import { luhn } from './luhn.js';

/**
 * Validates a number, bigint, or string using the Luhn algorithm.
 *
 * @see {@link luhn}
 * @example
 * ```ts
 * safeLuhn('4000000000001000'); // true
 * safeLuhn(4000000000001000n); // true
 * safeLuhn(''); // false
 * safeLuhn('not a credit card number'); // false
 * ```
 */
export function safeLuhn(input: number | bigint | string): boolean {
  switch (typeof input) {
    case 'string':
      return input.length > 0 && !/\D/.test(input) && luhn(input);
    case 'number':
      return Number.isInteger(input) && input >= 0 && input < 1e21 && luhn(String(input));
    case 'bigint':
      return input >= 0n && luhn(String(input));
    default:
      return false;
  }
}
