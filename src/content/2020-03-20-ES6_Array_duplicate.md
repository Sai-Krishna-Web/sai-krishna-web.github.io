---
templateKey: blog-post
id: array
title: Remove Array Duplicates
slug: /2020/03/20/ES6_Array_duplicate
date: 2020-03-20T03:48:03.125Z
description: Remove Array Duplicates using ES6 Set. Convert it back to an array using Array.from
headerImage: https://i.imgur.com/szJzw2w.jpg
tags:
  - ES6
  - JavaScript
---

## Remove Array Duplicates Using ES6 Set

“Set” is a data structure that stores unique values. It doesn’t allow you to add duplicates. This makes it ideal for us to use to remove duplicates from an Array. BUT, Set is not an array, that’s why we need to convert the Set back into an Array in order to use array methods such as .map or .reduce

1. Remove duplicates using “new Set”
2. Convert it back to an array using “Array.from”


```javascript
const duplicates = [1,2,3,4,4,1];

const uniques = Array.from(new Set(duplicates));

console.log(uniques) // [1,2,3,4,1]
```

Alternatively, you can use the spread operator to convert the Set to an Array.

```javascript
const duplicates = [1,2,3,4,4,1];

const uniques = [...new Set(duplicates)];

console.log(uniques) // [1,2,3,4,1]
```
