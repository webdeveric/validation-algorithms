/* eslint-disable @typescript-eslint/no-unused-expressions */
import { bench } from 'vitest';

bench(
  'Number.parseInt(x, 10)',
  () => {
    const input = '123';

    Number.parseInt(input[2]!, 10);
  },
  {
    iterations: 10_000,
  },
);

bench(
  'charCodeAt(x) - 48',
  () => {
    '123'.charCodeAt(2) - 48;
  },
  {
    iterations: 10_000,
  },
);

bench(
  'Number(x)',
  () => {
    Number('123'[2]);
  },
  {
    iterations: 10_000,
  },
);
