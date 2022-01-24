# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `head` : returns an array of the first of a given array
*  `tail` : return array except first element of an array
*  `middle` : return the middle element of an array
*  `assertArraysEqual` : return same array
*  `assertEqual` : returns a boolean of if two arguments are equal
*  `assertObjectsEqual` : returns a boolean of if two arguments are equal
*  `countLetters` : returns an object of letter frequency
*  `countOnly` : returns a number of the requency of the argument in a list
*  `eqArrays` : returns boolean if two arrays are equal using recursion
*  `eqObjects` : returns boolean if two objects are equal
*  `findKeys` : returns key name
*  `findKeyByValue` : returns name of argument value
*  `letterPositions` : returns an object with letters are key and the position in value
*  `takeUntil` : returns an array of given array until the given keyword
*  `without` : returns array without list of toberemoved items