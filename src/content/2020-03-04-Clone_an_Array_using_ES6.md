---
templateKey: blog-post
id: array
title: Clone an Array using ES6
slug: /2020/03/04/Clone_an_Array_using_ES6
date: 2020-03-04T03:48:03.125Z
description: When we need to copy an array, we often times used slice. But with ES6, you can also use the spread operator to duplicate an array.
headerImage: https://imgur.com/RATPg6c.jpg
tags:
  - ES6
  - JavaScript
---
## Clone an Array using ES6

When we need to copy an array, we often times used slice. But with ES6, you can also use the spread operator to duplicate an array.
```javascript
const Objs = ['obj1', 'obj2', 'obj3'];
// Old way
const cloneObjs = Objs.slice();
// ES6 way
const cloneObjsES6 = [...Objs];
```
## Why Can’t I Use `=` to Copy an Array?

Because arrays in JS are reference values, so when you try to copy it using the `=` it will only copy the reference to the original array and not the value of the array. To create a real copy of an array, you need to copy over the value of the array under a new value variable. That way this new array does not reference to the old array address in memory.

```javascript
const Objs = ['Obj1', 'Obj1', 'Obj3'];

const fakeObjs = Objs;

const cloneObjs = [...Objs];

console.log(Objs === fakeObjs);
// true --> it's pointing to the same memory space
console.log(Objs === cloneObjs);
// false --> it's pointing to a new memory space
```

## Problem with Reference Values

If you ever dealt with Redux or any state management framework. You will know immutability is super important. Let me briefly explain. An immutable object is an object where the state can't be modified after it is created. The problem with JavaScript is that `arrays` are mutable. So this can happen:

```javascript
const Objs = ['Obj1', 'Obj2'];

const Objs2 = Objs;

Objs2.push('Obj3');

console.log(Objs2);
// [ 'Obj1', 'Obj2', 'Obj3' ]

//Our original Objs have changed?!
console.log(Objs);
// [ 'Obj1', 'Obj2', 'Obj3' ]
```

That's why we need to clone an array:

```javascript
const Objs = ['Obj1', 'Obj2'];

const Objs2 = [...Objs];
// Let's change our Objs2 array
Objs2.push('Obj3');

console.log(Objs2);
// [ 'Obj1', 'Obj2', 'Obj3' ]

// our original Objs is not affected!
console.log(Objs);
// [ 'Obj1', 'Obj2' ]
```

## Mutable vs Immutable Data Types

Mutable:
- object
- array
- function

Immutable:
All primitives are immutable.
- string
- number
- boolean
- null
- undefined
- symbol

## Shallow Copy Only

Please note `spread` only goes one level deep when copying an array. So if you're trying to copy a multi-dimensional arrays, you will have to use other alternatives.

```javascript
const nums = [[1, 2], [3]];

const cloneNums = [...nums];

// Let's change the first item in the first nested item in our cloned array.
cloneNums[0][0] = 0;

console.log(cloneNums);
// [ [ 0, 2 ], [ 3 ] ]

// NOOooo, the original is also affected
console.log(nums);
// [ [ 0, 2 ], [ 3 ] ]
```

Shallow copy means the first level is copied, deeper levels are **referenced**.

## Community Input

### `Array.from` is Another Way to Clone Array

```javascript
const Objs = ['Obj1', 'Obj2', 'Obj3'];

const cloneObjs = Array.from(Objs);
```
