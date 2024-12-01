/* eslint-disable @typescript-eslint/no-unused-vars */
import { bench } from 'vitest';

bench(
  'boolean',
  () => {
    let flag = true;

    flag = !flag;
    flag = !flag;
  },
  {
    time: 1000,
  },
);

bench(
  'Bitwise XOR assignment',
  () => {
    let flag = 1;

    flag ^= 1;
    flag ^= 1;
  },
  {
    time: 1000,
  },
);
