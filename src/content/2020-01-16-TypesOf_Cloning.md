---
templateKey: blog-post
id: https://heisenberg-blog.netlify.app/guestbook/
title: Types of array cloning
slug: /2020/01/16/TypesOf_Cloning
date: 2020-01-16T03:48:03.125Z
description: There are 2 types of array cloning, shallow & deep. Shallow copies only cover the 1st level of the array and the rest are referenced.
tags:
  - JS
  - Array
---

# Types of array cloning

There are 2 types of array cloning: shallow & deep. Shallow copies only cover the 1st level of the array and the rest are referenced. If you want a true copy of nested arrays, you’ll need a deep clone. For deep clones, go with the JSON way OR better yet use Lodash

```javascript
const numbers = [1, [2], [3, [4]], 5];

// Using JavaScript
JSON.parse(JSON.stringify(numbers));

// Using Lodash
_.cloneDeep(numbers);
```

## Arrays are Reference Types

In order to understand why there are two types of cloning. Let's dig into the fundamentals and explains what are reference types.

Unlike your primitive types (ie. number or string), arrays are reference types. Which means when you assign an array to a variable, you're assigning a memory address and not the actual array itself. I know this is a bit confusing. So let's explain with an example.

### Copying a Value type 

So no biggie here. We're creating a copy of `value`. And if we change the `valueCopy`, it doesn't affect the original `value`. Makes sense - when we change the copy it shouldn't affect the original at all. All good here.

```javascript
let value = 3;
let valueCopy = value; // create copy

console.log(valueCopy); // 3

// Change valueCopy
valueCopy = 100
console.log(valueCopy); // 100

// Original NOT affected 
console.log(value); // 3
```

### Copying a Reference type 

Okay, things are about to get weird now. Let's copy our array using the same method as we did to copy a value type.

```javascript
let array = [1,2,3];
let arrayCopy = array; // create copy

console.log(arrayCopy); // [1,2,3];

// Change 1st element of the array
arrayCopy[0] = 'sai';
console.log(arrayCopy); // [ 'sai', 2, 3 ]

// Original got affected
console.log(array); // [ 'sai', 2, 3 ]
```

Why did the original array also got affected? That's because what you copied over is not the array itself but the pointer to the memory space the array occupies. Reference types don't hold values, they are a pointer to the value in memory.

**Solution to Copying Reference Types**

So the solution is to copy over the value NOT the pointer. Like this:

```javascript
let array = [1,2,3];
let arrayCopy = [...array]; // create TRUE copy

console.log(arrayCopy); // [1,2,3];

// Change 1st element of the array
arrayCopy[0] = 'sai';
console.log(arrayCopy); // [ 'sai', 2, 3 ]

// Original NOT affected 
console.log(array); // [ 1, 2, 3 ]
```

### Shallow vs Deep Clone

When I used spread `...` to copy an array, I'm only creating a shallow copy. If the array is nested or multi-dimensional, it won't work. Let's take a look:

```javascript
let nestedArray = [1, [2], 3];
let arrayCopy = [...nestedArray]; 

// Make some changes
arrayCopy[0] = 'sai'; // change shallow element
arrayCopy[1][0] = 'krishna'; // change nested element
console.log(arrayCopy); // [ 'sai', [ 'krishna' ], 3 ]

// Nested array got affected
console.log(nestedArray); // [ 1, [ 'krishna' ], 3 ]
```

As you can see, the shallow or first layer is fine. However, once we change the nested element, the original array also got affected. So the solution is to do a deep clone:

```javascript
let nestedArray = [1, [2], 3];
let arrayCopy = JSON.parse(JSON.stringify(nestedArray)); 

// Make some changes
arrayCopy[0] = 'sai'; // change shallow element
arrayCopy[1][0] = 'krishna'; // change nested element
console.log(arrayCopy); // [ 'sai', [ 'krishna' ], 3 ]

// Nested array NOT affected
console.log(nestedArray); //  1, [ 2 ], 3 ]
```
