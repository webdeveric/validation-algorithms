/**
 * Validates a string using the Luhn algorithm.
 *
 * @param input Must be string of digits only (0-9).
 * @returns `true` if the string is valid according to the Luhn algorithm, `false` otherwise.
 * @see {@link https://en.wikipedia.org/wiki/Luhn_algorithm}
 * @example
 * ```ts
 * luhn('4000000000001000'); // true
 * luhn('4000000000001001'); // false
 * ```
 */
export function luhn(input: string): boolean {
  /**
   * This is the precomputed result of running this snippet.
   *
   * ```ts
   * '0123456789'.split('').map((digit) => {
   *   const num = Number.parseInt(digit, 10) * 2;
   *   return num > 9 ? num - 9 : num;
   * });
   * ```
   */
  const precomputed = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9] as const satisfies number[];

  let sum = 0;
  let isSecond: 0 | 1 = 0;
  let length = input.length;

  while (length) {
    const num = input.charCodeAt(--length) - 48;

    sum += isSecond ? precomputed[num]! : num;

    isSecond ^= 1;
  }

  return sum % 10 === 0;
}
