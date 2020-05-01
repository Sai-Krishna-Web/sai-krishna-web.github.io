'use strict'

var Finder = Finder || require( './finder.umd' )

var VERSION = '@VERSION'
var NON_INLINE_PROSE = Finder.NON_INLINE_PROSE
var AVOID_NON_PROSE = Finder.PRESETS.prose.filterElements

var global = window || {}
var document = global.document || undefined

function matches( node, selector, bypassNodeType39 ) {
  var Efn = Element.prototype
  var matches = Efn.matches || Efn.mozMatchesSelector || Efn.msMatchesSelector || Efn.webkitMatchesSelector
  
  if ( node instanceof Element ) {
    return matches.call( node, selector ) 
  } else if ( bypassNodeType39 ) {
    if ( /^[39]$/.test( node.nodeType ))  return true
  }
  return false
}

if ( typeof document === 'undefined' )  throw new Error( 'Fibre requires a DOM-supported environment.' )

var Fibre = function( context, preset ) {
  return new Fibre.fn.init( context, preset )
}


Fibre.version = VERSION
Fibre.matches = matches

Fibre.fn = Fibre.prototype = {
  constructor: Fibre,

  version: VERSION,

  finder: [],

  context: undefined,

  portionMode: 'retain',

  selector: {},

  preset: 'prose',

  init: function( context, noPreset ) {
    if ( !!noPreset )  this.preset = null

    this.selector = {
      context: null,
      filter: [],
      avoid: [],
      boundary: []
    }

    if ( !context ) {
      throw new Error( 'A context is required for Fibre to initialise.' ) 
    } else if ( context instanceof Node ) {
      if ( context instanceof Document )  this.context = context.body || context
      else  this.context = context
    } else if ( typeof context === 'string' ) {
      this.context = document.querySelector( context )
      this.selector.context = context
    }
    return this
  },

  filterFn: function( node ) {
    var filter = this.selector.filter.join( ', ' ) || '*'
    var avoid  = this.selector.avoid.join( ', ' ) || null
    var result = matches( node, filter, true ) && !matches( node, avoid )
    return ( this.preset === 'prose' ) ? AVOID_NON_PROSE( node ) && result : result
  },

  boundaryFn: function( node ) {
    var boundary = this.selector.boundary.join( ', ' ) || null
    var result = matches( node, boundary )
    return ( this.preset === 'prose' ) ? NON_INLINE_PROSE( node ) || result : result
  },

  filter: function( selector ) {
    if ( typeof selector === 'string' ) {
      this.selector.filter.push( selector )
    }
    return this
  },

  endFilter: function( all ) {
    if ( all ) {
      this.selector.filter = []
    } else {
      this.selector.filter.pop()
    }
    return this
  },

  avoid: function( selector ) {
    if ( typeof selector === 'string' ) {
      this.selector.avoid.push( selector )
    }
    return this
  },

  endAvoid: function( all ) {
    if ( all ) {
      this.selector.avoid = []
    } else {
      this.selector.avoid.pop()
    }
    return this
  },

  addBoundary: function( selector ) {
    if ( typeof selector === 'string' ) {
      this.selector.boundary.push( selector )
    }
    return this
  },

  removeBoundary: function() {
    this.selector.boundary = []
    return this
  },

  setMode: function( portionMode ) {
    this.portionMode = portionMode === 'first' ? 'first' : 'retain'
    return this
  },

  replace: function( regexp, newSubStr ) {
    var it = this
    it.finder.push(Finder( it.context, {
      find: regexp, 
      replace: newSubStr,
      filterElements: function( currentNode ) {
        return it.filterFn( currentNode )
      }, 
      forceContext: function( currentNode ) {
        return it.boundaryFn( currentNode )
      },
      portionMode: it.portionMode
    }))
    return it 
  },

  wrap: function( regexp, strElemName ) {
    var it = this
    it.finder.push(Finder( it.context, {
      find: regexp, 
      wrap: strElemName,
      filterElements: function( currentNode ) {
        return it.filterFn( currentNode )
      },
      forceContext: function( currentNode ) {
        return it.boundaryFn( currentNode )
      },
      portionMode: it.portionMode
    }))
    return it
  },

  revert: function( level ) {
    var max = this.finder.length        
    var level = Number( level ) || ( level === 0 ? Number(0) :
      ( level === 'all' ? max : 1 ))

    if ( typeof max === 'undefined' || max === 0 )  return this
    else if ( level > max )  level = max

    for ( var i = level; i > 0; i-- ) {
      this.finder.pop().revert()
    }
    return this
  }
}

// Deprecated API(s)
Fibre.fn.filterOut = Fibre.fn.avoid

// Make sure init() inherit from Fibre()
Fibre.fn.init.prototype = Fibre.fn

// EXPOSE
if ( typeof define === 'function' && define.amd ) {
  define(function() {  return Fibre  })
} else if ( typeof module === 'object' && typeof module.exports === 'object' ) {
  module.exports = Fibre 
} else {
  global.Fibre = Fibre
}
// EXPOSE
