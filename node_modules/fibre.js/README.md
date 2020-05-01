
# Fibre.js
Fibre.js is a small library based on [`FindAndReplaceDOMText`][fardt] by [James Padolsey][jp].

The method collections of Fibre.js help search for the regular expression matches in a given context (a DOM node) and replace/wrap each one of them with a new text run or a new DOM node. 

*Chaining & string-like syntax supported.*

[fardt]: https://github.com/padolsey/findAndReplaceDOMText
[jp]: http://james.padolsey.com

## Install
- NPM `npm i fibre.js --save`

### Require the library
Use the `script` element,
```html
<script src="vendor/fibre.js/fibre.js"></script>
```

AMD,
```javascript
require( './node_modules/fibre.js/src/fibre', function( Fibre ) {
  var fibre = Fibre( document.body )
  …
})
```

CommonJS (NPM),
```javascript
var Fibre = require( 'fibre.js' )
var fibre = Fibre( document.body )
…
```

## Run test
- Install dependencies `sudo npm i`
- Run test `gulp test`

## Browser support
Fibre.js works on all *modern* browsers with no legacy support for older IE.

## License
Fibre.js is released under MIT License.

* * *

<!-- ################################################ -->

# API
- [Introduction](#introduction)
- [Fibre.fn.wrap()](#fibrefnwrap)
- [Fibre.fn.replace()](#fibrefnreplace)
- [Fibre.fn.setMode()](#fibrefnsetmode)
- [Fibre.fn.addBoundary()](#fibrefnaddboundary)
- [Fibre.fn.removeBoundary()](#fibrefnremoveboundary)
- [Fibre.fn.avoid()](#fibrefnavoid)
- [Fibre.fn.endAvoid()](#fibrefnendavoid)
- [Fibre.fn.filter()](#fibrefnfilter)
- [Fibre.fn.endFilter()](#fibrefnendfilter)
- [Fibre.fn.revert()](#fibrefnrevert)
- [Fibre.matches()](#fibrematches)

<!-- ################################################ -->

## Introduction 
The syntax is *as simple as jQuery!*

`Fibre` needs no `new` operator to create an instance. Assign *one* DOM node to the first parametre `context` to initialise. 

### Syntax
```javascript
var fibre = Fibre( context, noPreset )

fibre
  .replace( … )
  .wrap( … )
```

### The `noPreset` switch
By default, Fibre ignores elements like `style`, `script`, `img`, etc and considers elements like `div`, `p`, `h1`, etc the boundaries of text. Set the second parametre `noPreset` to `true` to turn off such configuration.

### Examples
```javascript
// Regular DOM node
Fibre( document.body )
// Document node
Fibre( document )
// jQuery object
Fibre( $( '.container article' )[0] )
// CSS selector (will only affect the first matched node)
Fibre( '.container article' )
```

<!-- ################################################ -->

## Fibre.fn.wrap()
The method wraps an assigned node round the matched text in the given context.

### Syntax
```javascript
fibre.wrap( regexp|substr, strElemName|node )
```
### Parametres

<dl>
<dt><code>regexp</code>
<dd>A RegExp object. Text that matches will be wrapt by the return node of parametre #2.

<dt><code>substr</code>
<dd>A String of which matches is to be wrapt by the return node of parametre #2.

<dt><code>strElemName</code>
<dd>A string of an element name to wrap round the matched text.

<dt><code>node</code>
<dd>A node that is to be cloned for each match portion. 
</dl>

### Examples
```html
<body>
  <p>Apple-eaters eat thousands of apples a day.</p>
</body>
```

```javascript
Fibre( document.body ).wrap( /\bapple(s)?\b/gi, 'em' )
```
Which results in:

```html
<body>
  <p><em>Apple</em>-eaters eat thousands of <em>apples</em> a day.</p>
</body>
```
Works with matches spread in different nodes,

```html
<body>
  <p><span>App</span>le-eaters eat thousands of apple<span class="pl">s</span> a day.</p>
</body>
```
Results in: 

```html
<body>
  <p><span><em>App</em></span><em>le</em>-eaters eat thousands of <em>apple</em><span class="pl"><em>s</em></span> a day.</p>
</body>
```

<!-- ################################################ -->

## Fibre.fn.replace()
The method replaces the matched text in the given context with a new string.

### Syntax
```javascript
fibre.replace( regexp|substr, newSubStr|function )
```

### Parametres

<dl>
<dt><code>regexp</code>
<dd>A RegExp object. Text that matches will be replaced by the return value of parametre #2.

<dt><code>substr</code>
<dd>A String that is to be replaced by the return value of parametre #2.

<dt><code>newSubStr</code>
<dd> The String that replaces the substring received from parametre #1. Common replacement patterns supported.

<dt><code>function</code>
<dd>A callback function to be invoked and returns the new substring or node.
</dl>

### Examples 
```html
<article>
  <p>Th<span>is</span> paragraph is to be later replaced.</p>
</article>
```

```javascript
var fibre = Fibre( 'article' )

fibre
  .replace( /(\w+)/g, '*$1' )
  .replace( /\*this/ig, function( portion, match ) {
    var idx = portion.index
    return idx + match[ idx ].toUpperCase()  
  })
```

Will result in:

```html
<article>
  <p>*TH<span>IS</span> *paragraph *is *to *be *later *replaced.</p>
</article>
```

<!-- ################################################ -->

## Fibre.fn.setMode()
The method sets the portion mode of the instance.

### Syntax
```javascript
fibre.setMode( portionMode )
```

### Parametres
<dl>
<dt><code>portionMode</code>
<dd>A String of either `'retain'` or `'first'`, which indicates whether to re-use the existing node boundaries when wrapping a match text, or simply place the entire replacement in the first-found match portion's node. The default value is `'retain'`.
</dl>

<!-- ################################################ -->

## Fibre.fn.addBoundary()
The method adds text boundary(ies) to avoids their cross-node matching and replacing.

### Syntax
```javascript
fibre.addBoundary( selector )
```

### Parametres
<dl>
<dt><code>selector</code>
<dd>A String containing one or more CSS selector(s) to be added as text boundaries.
</dl>

### Examples
```html
<div id="test">
  <p>Something</p>
  <p>Some</p><blockquote>Thing</blockquote>
  <a>Something</a>
  <a>Some</a><a class="block">Thing</a>
</div>
```

```javascript
Fibre( document.getElementById( 'test' ))
  .wrap( /something/gi, 'span' )
  .addBoundary( 'a.block' )
  .wrap( /something/gi, 'b' )
```

Will result in:

```html
<div id="test">
  <p><span><b>Something</b></span></p>
  <p>Some</p><blockquote>Thing</blockquote>
  <a><span><b>Something</b></span></a>
  <a><span>Some</span></a><a class="block"><span>Thing</span></a>
</div>
```

<!-- ################################################ -->

## Fibre.fn.removeBoundary()
The methods removes *all* custom text boundaries of the instance.

### Syntax
```javascript
fibre.removeBoundary()
```

**Note:** The preset configurations will not be removed by the use of the method.

<!-- ################################################ -->

## Fibre.fn.avoid()
The method avoids the nodes matching the given selector which will later not apply the wrap/replace method.

**Note:** An older name of the method `filterOut()` is deprecated since v0.2.0. Will be removed in the next major update.

### Syntax
```javascript
fibre.avoid( selector )
```

### Parametres
<dl>
<dt><code>selector</code>
<dd>A String containing one or more CSS selector(s) to avoid the matched nodes while traversing.
</dl>

### Examples
```html
<div id="test">
  <p>This <span class="be">is</span> a simple test.</p>
</div>

<script>
 var test = 'This is a simple test.' 
</script>
```

```javascript
Fibre( document.getElementById( 'test' ))
  .wrap( /is/gi, 'span' )
  .avoid( '.be' )
  .replace( /is/gi, 'IZZ' ) 
```

Will result in:

```html
<div id="test">
  <p>Th<b>IZZ</b> <span class="be"><b>is</b></span> a simple test.</p>
</div>

<script>
 var test = 'ThIZZ IZZ a simple test.' 
</script>
```

<!-- ################################################ -->

## Fibre.fn.endAvoid()
The method ends the avoiding and pops back to previous state of the context.

### Syntax
```javascript
fibre.endAvoid( all )
```

### Parametres
<dl>
<dt><code>all</code>
<dd>*Optional.* A Boolean that decides whether to reset all the avoiding conditions or just one level.
</dl>

**Note:** The preset configurations will not be reset by the use of the method.

<!-- ################################################ -->

## Fibre.fn.filter()
The method filters the nodes matching the given selector which will later apply the wrap/replace method.

### Syntax
```javascript
fibre.filter( selector )
```

### Parametres
<dl>
<dt><code>selector</code>
<dd>A String containing one or more CSS selector(s) to filter the matched nodes while traversing.
</dl>

### Examples
```html
<div id="test">
  <p>This <span class="be">is</span> a simple test.</p>
</div>

<script>
 var test = 'This is a simple test.' 
</script>
```

```javascript
Fibre( document.getElementById( 'test' ))
  .wrap( /is/gi, 'b' )
  .filter( '.be b' )
  .wrap( /is/gi, 'em' ) 
```

Will result in:

```html
<div id="test">
  <p>Th<b>is</b> <span class="be"><b><em>is</em></b></span> a simple test.</p>
</div>

<script>
 var test = 'This is a simple test.' 
</script>
```
**Note:** The matched text inside `script` element isn't altered for Fibre avoids `script`, `style`, etc by default.

<!-- ################################################ -->

## Fibre.fn.endFilter()
The method ends the filtering and pops back to previous state of the context.

### Syntax
```javascript
fibre.endFilter( all )
```

### Parametres
<dl>
<dt><code>all</code>
<dd>*Optional.* A Boolean that decides whether to reset all the filtering conditions or just one level.
</dl>

**Note:** The preset configurations will not be reset by the use of the method.

<!-- ################################################ -->

## Fibre.fn.revert()
The method reverts the finder by a given level.

### Syntax
```javascript
fibre.revert( [level] )
```

### Parametres
<dl>
<dt><code>level</code>
<dd><em>Optional.</em> A Number or a String whose value is <code>'all'</code> indicating the finder level to revert. The default value is <code>1</code>.
</dl>

### Examples
```javascript
var fibre = Fibre( document.getElementById( 'test' ))
  .replace( /\bis\b/gi, 'isn\'t' )
  .wrap( /\bwill\b/gi, 'span' )

// Later,
fibre.revert( 'all' )
```

#### Description
The last line of the script above will revert the context (`document.getElementById( 'test' )`) back to the state before any replace or wrap method has executed.

<!-- ################################################ -->

## Fibre.matches()
The method compares and returns whether a given node matches the given CSS selectors.

### Syntax
```javascript 
Fibre.matches( node, selector, bypassNodeType39 )
```

<dl>
<dt><code>node</code>
<dd>A node object to compare. 

<dt><code>selector</code>
<dd>A string of CSS selectors to check if the node matches.

<dt><code>bypassNodeType39</code>
<dd><em>Optional.</em> A boolean that decides whether to always return `true` for Document or Text nodes.
</dl>

### Examples
```html
<!doctype html>
<html lang="en">
  <head>
  </head>
  <body class="post">
  </body>
</html>
```

```javascript 
Fibre.matches( document.body, 'body.index, body.post' )  // returns true
Fibre.matches( document.documentElement, '[lang="es"]' ) // returns false 
Fibre.matches( document, 'style' )                       // returns false
Fibre.matches( document, 'style', true )                 // returns true
```

