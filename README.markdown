# fj-compose

[![Build Status](https://travis-ci.org/fp-js/fj-compose.svg)](https://travis-ci.org/fp-js/fj-compose) [![npm version](https://badge.fury.io/js/fj-compose.svg)](http://badge.fury.io/js/fj-compose)
> Compose with ease.

## Installation

`npm install fj-compose --save`

## Usage

```js
var compose = require('fj-compose');

const add1 = (x) => x + 1,
mult2 = (x) => x * 2,
square = (x) => x * x;

const compose1 = compose(add1),
compose2 = compose(add1, mult2),
compose3 = compose(add1, mult2, square);

compose1(0); // 1

compose2(1); // 4

compose3(1); // 16

```
