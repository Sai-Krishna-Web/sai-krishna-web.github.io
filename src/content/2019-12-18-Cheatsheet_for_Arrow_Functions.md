---
templateKey: blog-post
id: c192eaba9fefc632acf87ed636593475
title: Cheatsheet for Arrow Functions 
slug: /2019/12/18/Cheatsheet_for_Arrow_Functions/
date: 2019-12-18T03:48:03.125Z
description: Cheatsheet to show you the ways to write and work around arrow functions.
headerImage: https://i.imgur.com/szJzw2w.jpg
tags:
  - ES6
---

## Cheatsheet: Arrow Functions 

Cheatsheet to show you the ways to write and work around arrow functions.

```javascript
// Explicit Return, Multi-Line
a => {
  return a
}

// Explicit Return, Single-Line
a => { return a }

// Implicit Return, Multi-line
a => (
  a
)

// Implicit Return, Single-Line
a => a

// Multiple Parameters, Parentheses Required
(a, b) => a + b
```

## Implicit vs Explicit Return

We have several ways of writing our arrow functions. This is because arrow functions can have either "implied return" or "explicit return" keyword.

With normal functions, if you want to return something, you have to use the `return` keyword. Arrow functions also have that. When you use the `return` keyword, it's called an **explicit return**. However, arrow functions up their game and allow something called **implied return** where the `return` keyword can be skipped. Let's look at some examples

### Example A: Normal Function

```javascript
const getName = function(name) {
  return name
}
```

### Example B: Arrow Function with Explicit Return

```javascript
// Multi-line
const getName = (name) => {
  return name
}

// Single-line
const getName = (name) => { return name }
```

### Example C: Arrow Function with Implicit Return

```javascript
// Single-line
const getName = (name) => name

// Multi-line
const getName = (name) => (
  name
)
```

Notice the difference? When you use curly braces `{}`, you need to explicitly state the return. However, when you don't use curly braces, the `return` is implied and you don't need it.

There's actually a name for this. When you use curly braces like in *Example b*, it's called a **block body**. And the syntax in *Example c* is called a **concise body**.

Here are the rules:

- Block body: `return` keyword is required
- Concise body: `return` keyword is implied and not needed

## Parentheses

With a normal function, we always had to use parentheses. However, with Arrow Functions, parentheses are optional if there is ONLY one parameter.

### Parentheses are optional for a SINGLE parameter

```javascript
// Normal Function
const numbers = function(one) {}

// Arrow Function, with parentheses
const numbers = (one) => {}

// Arrow Function, without parentheses
const numbers = one => {}
```

### Parentheses are required for MULTIPLE parameters

```javascript
// Normal Function
const numbers = function(one, two) {}

// Arrow Function, with parentheses
const numbers = (one, two) => {}
```
