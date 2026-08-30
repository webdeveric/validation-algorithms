# `validation-algorithms`

[![Node.js CI](https://github.com/webdeveric/validation-algorithms/actions/workflows/node.js.yml/badge.svg)](https://github.com/webdeveric/validation-algorithms/actions/workflows/node.js.yml) [![Release](https://github.com/webdeveric/validation-algorithms/actions/workflows/release.yml/badge.svg)](https://github.com/webdeveric/validation-algorithms/actions/workflows/release.yml)

## Install

`pnpm add validation-algorithms`

`npm install validation-algorithms --save`

`yarn add validation-algorithms`

## Algorithms

### [Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm)

```ts
import { luhn } from 'validation-algorithms/luhn';

if (luhn('4000000000001000')) {
  // passed validation
}
```

## Benchmarks

Run `pnpm bench` to run the benchmarks.

![image](https://github.com/user-attachments/assets/3c0105c4-bbe6-4f55-9a61-058b3751fe94)
