export function luhn(input: number | bigint | string): boolean {
  const value = typeof input === 'string' ? input : String(input);

  // input contained non digit characters.
  if (/[^\d]/.test(value)) {
    return false;
  }

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
  const precomputed = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9] as const;

  let sum = 0;

  for (let index = value.length, isSecond = false; index; isSecond = !isSecond) {
    const num = value.charCodeAt(--index) - 48;

    sum += isSecond ? precomputed[num]! : num;
  }

  return sum % 10 === 0;
}
