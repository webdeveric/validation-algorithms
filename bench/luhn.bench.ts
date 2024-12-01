import fastLuhn from 'fast-luhn';
import { validate as luhnValidate } from 'luhn';
import { bench } from 'vitest';

import { luhn } from '../src/luhn.js';

const iterations = 1000;

bench(
  'luhn()',
  () => {
    luhn('4000000000001000');
  },
  {
    iterations,
  },
);

bench(
  'npm:fast-luhn',
  () => {
    fastLuhn('4000000000001000');
  },
  {
    iterations,
  },
);

bench(
  'npm:luhn',
  () => {
    luhnValidate('4000000000001000');
  },
  {
    iterations,
  },
);
