---
templateKey: blog-post
id: array
title: Using ES6 Spread to split
slug: /2020/03/20/Split_usin_ES6
date: 2020-02-15T03:48:03.125Z
description: Convert a string to an array of characters using the spread syntax!
headerImage: https://imgur.com/RATPg6c.jpg
tags:
  - ES6
  - JavaScript
---

## Using ES6 Spread to split

Convert a string to an array of characters using the spread syntax!

It goes through each character in the “HeisenBerg” string and assigns it to our new “split_HeisenBerg” array.


```javascript
const HeisenBerg = 'HeisenBerg';

// Old way
const split_HeisenBerg1 = HeisenBerg.split('');
console.log(split_HeisenBerg1) // ["H", "e", "i", "s", "e", "n", "B", "e", "r", "g"]

// ES6: using Spread
const split_HeisenBerg2 = [...HeisenBerg];
console.log(split_HeisenBerg2) // ["H", "e", "i", "s", "e", "n", "B", "e", "r", "g"]

// ES6: using Array.from
const split_HeisenBerg3 = Array.from(HeisenBerg);
console.log(split_HeisenBerg3); // ["H", "e", "i", "s", "e", "n", "B", "e", "r", "g"]
```

## Example

### Capitalizing String

Here's a good use case as to why you would want to split strings.

```javascript
const name = "krishna";

const capitalizeName = [
  
  // Capitalize the first character of the array
  ...name[0].toUpperCase(),
  
  // Ignore the first character and return the rest of the array
  ...name.slice(1)
]
// Join the array to make a single string
.join(''); 

console.log(capitalizeName); // Krishna
```
