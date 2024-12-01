# `validation-algorithms`

[![Node.js CI](https://github.com/webdeveric/validation-algorithms/actions/workflows/node.js.yml/badge.svg)](https://github.com/webdeveric/validation-algorithms/actions/workflows/node.js.yml) [![Release](https://github.com/webdeveric/validation-algorithms/actions/workflows/release.yml/badge.svg)](https://github.com/webdeveric/validation-algorithms/actions/workflows/release.yml)

## Install

`pnpm add validation-algorithms`

`npm i validation-algorithms --saves`

## Usage

```ts
import { luhn } from 'validation-algorithms/luhn';

if (luhn('4000000000001000')) {
  // passed validation
}
```

## Benchmarks

Run `pnpm bench` to run the benchmarks.
