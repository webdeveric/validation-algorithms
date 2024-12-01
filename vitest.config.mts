import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    benchmark: {
      include: ['./bench/**/*.bench.ts'],
    },
    include: ['./test/**/*.test.ts'],
    coverage: {
      all: false,
      provider: 'v8',
    },
  },
});
