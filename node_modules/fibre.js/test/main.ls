
test = QUnit.test
module = QUnit.module

doc = -> document.cloneNode true
div = -> document.createElement \div

convert-html = ( html ) ->
  html
    .toLowerCase!
    .replace( /[\r\n]/g, '' )
    .replace( /="([^"]+)"/g, \=$1 )

html-equal = ( a, b, log ) ->
  a = convert-html a
  b = convert-html b
  equal a, b, log

module \Basics
test 'Element boundary arsenal' ( assert ) !->
  d = div!
  test = {
    'TEST': '<x>TEST</x>'
    'T<em>EST</em>': '<x>T</x><em><x>EST</x></em>'
    '<div>TEST</div>': '<div><x>TEST</x></div>'
    '<i>T</i><b>E</b><u>S</u><i>T</i>': '<i><x>T</x></i><b><x>E</x></b><u><x>S</x></u><i><x>T</x></i>'
    '<i>T</i><u>EST ok</u>': '<i><x>T</x></i><u><x>EST</x> ok</u>'
    '<i>ok T</i><em>EST</em>': '<i>ok <x>T</x></i><em><x>EST</x></em>'
    '<i>ok <i><b>T</b></i></i><em>EST</em>': '<i>ok <i><b><x>T</x></b></i></i><em><x>EST</x></em>'
  }

  for before, after of test
    d.innerHTML = before
    Fibre d .wrap /TEST/ \x
    html-equal d.innerHTML, after

    d.innerHTML = before
    f = Fibre d .wrap /TEST/g \x
    html-equal d.innerHTML, after
    f.revert!
    html-equal d.innerHTML, before

module \Findings
test 'String matches' !->
  before = 'this is a ??te<i>st</i>'
  d = div!
  d.innerHTML = before
  Fibre d .wrap \??test \x
  html-equal d.innerHTML, 'this is a <x>??te</x><i><x>st</x></i>'

test 'Variable length RegExp matches' !->
  d = div!
  for i from 0 til 100
    d.innerHTML = Array( i + 1 ).join \<em>x</em>
    Fibre d .wrap /x+/, \z
    html-equal d.innerHTML, Array( i + 1 ).join \<em><z>x</z></em>

test 'Specified group' !->
  before = 'TEST TESThello testhello TESThello'
  d = div!
  r1 = /(TEST)hello/
  r2 = /(TEST)hello/g
  r3 = /\s(TEST)(hello)/gi

  d.innerHTML = before
  Fibre d
    .wrap r1, \x
    .replace r1, \$1
  html-equal d.innerHTML, 'TEST <x>TEST</x> testhello TESThello'

  Fibre d
    .wrap r2, \x
    .replace r2, \$1
  html-equal d.innerHTML, 'TEST <x>TEST</x> testhello <x>TEST</x>'

  d.innerHTML = before
  Fibre d
    .wrap r3, \x .replace r3, \$2
  html-equal d.innerHTML, 'TEST<x>hello</x><x>hello</x><x>hello</x>'

test 'Word boundaries' !->
  before = 'a go matching at test wordat at'
  d = div!

  d.innerHTML = before
  Fibre d .wrap /\bat\b/g, \x
  html-equal d.innerHTML, 'a go matching <x>at</x> test wordat <x>at</x>'

module \Replacement
test 'Basic text' !->
  before = 'This <span class="be">is</span> a text run for replacement.'
  d = div!

  d.innerHTML = before
  Fibre d .replace /is\b/gi, \IZZ
  htmlEqual d.innerHTML, 'ThIZZ <span class="be">IZZ</span> a text run for replacement.'

test 'With newly-generated nodes' !->
  before = 'This <span class="be">is</span> a text run for replacement.'
  d = div!

  d.innerHTML = before
  Fibre d .wrap /is\b/gi, document.createElement \span
  htmlEqual d.innerHTML, 'Th<span>is</span> <span class="be"><span>is</span></span> a text run for replacement.', \Wrap

  d.innerHTML = before
  Fibre d .replace /is\b/gi, ( portion ) ->
    span = document.createElement \span
    span.className = \test
    span.appendChild document.createTextNode portion.text
    span
  htmlEqual d.innerHTML, 'Th<span class="test">is</span> <span class="be"><span class="test">is</span></span> a text run for replacement.', \Replace

test 'Custom replacement function' !->
  before = '<span>v</span><span>v</span><span>v</span><span>v</span><span>v</span>'
  d = div!

  r1 = /v+/gi
  d.innerHTML = before
  Fibre d .replace r1, ( portion ) ->
    document.createTextNode 'aeiou'[portion.index]
  htmlEqual d.innerHTML, '<span>a</span><span>e</span><span>i</span><span>o</span><span>u</span>'

  before = '4321 1234 5678 abcd'
  r2 = /\w{4}/g
  d.innerHTML = before
  Fibre d .replace r2, ( portion, mat ) ->
    mat.0.split('').reverse!.join('') + \?
  htmlEqual d.innerHTML, '1234? 4321? 8765? dcba?'

module \Filtering
test 'Default filtering' !->
  before = 'This <b class="be">is</b> a text run for the test.   <style>.test{}</style>  <script>test()</script>'
  d = div!
  r = /te([sx])t/gi

  d.innerHTML = before
  fibre = Fibre d
  fibre
    .wrap r, \x
    .replace r, \TE$1T
  html-equal d.innerHTML, 'This <b class="be">is</b> a <x>TExT</x> run for the <x>TEsT</x>.   <style>.test{}</style>  <script>test()</script>'

test 'Filter nodes with given selectors' !->
  before = '<b>test</b>, <i>test</i>, <u>test</u>'
  d = div!

  d.innerHTML = before
  Fibre d
    .filter 'div, b, i'
    .wrap /test/g, \x

  html-equal d.innerHTML, '<b><x>test</x></b>, <i><x>test</x></i>, <u>test</u>'

test 'End filtering' !->
  before = '<b>test</b>, <i>test</i>, <u>test</u>'
  d = div!

  d.innerHTML = before
  Fibre d
    .filter 'div, b, i'
      .wrap /test/g, \x
    .endFilter!
    .wrap /test/g, \y
  html-equal d.innerHTML, '<b><x><y>test</y></x></b>, <i><x><y>test</y></x></i>, <u><y>test</y></u>'

  d.innerHTML = before
  f = Fibre d
    .filter 'div, b'
    .filter \i
      .wrap /test/g, \x
    .endFilter!
    .filter \x
      .wrap /test/g, \y
  html-equal d.innerHTML, '<b><x><y>test</y></x></b>, <i><x>test</x></i>, <u>test</u>'

  d.innerHTML = before
  f = Fibre d
    .filter 'div, b'
    .filter \i
      .wrap /test/g, \x
    .endFilter!
    .filter \x
      .wrap /test/g, \y
    .endFilter true
      .wrap /test/g, \z
  html-equal d.innerHTML, '<b><x><y><z>test</z></y></x></b>, <i><x><z>test</z></x></i>, <u><z>test</z></u>'

test 'Avoid given selectors' !->
  before = 'This <b class="be">is</b> a text run for the test.   <style>.is{}</style>  <script>is()</script>'
  d = div!
  r = /is/gi

  d.innerHTML = before
  Fibre d
    .wrap r, \x
    .avoid \.be
    .wrap r, \y
  html-equal d.innerHTML, 'th<x><y>is</y></x> <b class=be><x>is</x></b> a text run for the test.   <style>.is{}</style>  <script>is()</script>'

  before = 'This <b class="be">is</b> a text run for the test.   <style>.is{}</style>  <script>is()</script>'
  d = div!
  d.innerHTML = before
  Fibre d, true
    .wrap r, \x
    .avoid \.be
    .wrap r, \y
  html-equal d.innerHTML, 'th<x><y>is</y></x> <b class=be><x>is</x></b> a text run for the test.   <style>.<x><y>is</y></x>{}</style>  <script><x><y>is</y></x>()</script>'

test 'End avoiding' !->
  before = '<a>test</a>, <strong>test, </strong> <em>test</em>'
  d = div!

  d.innerHTML = before
  Fibre d
    .avoid \strong
    .avoid \em
    .replace /test/gi, \DONE
    .endAvoid!
    .replace /test/gi, \DONE-2
  html-equal d.innerHTML, '<a>done</a>, <strong>test, </strong> <em>done-2</em>'

  d.innerHTML = before
  Fibre d
    .avoid \strong
    .avoid \em
    .replace /test/gi, \DONE
    .endAvoid yes
    .replace /test/gi, \DONE-2
  html-equal d.innerHTML, '<a>done</a>, <strong>done-2, </strong> <em>done-2</em>'

module \Prose
test 'Default preset prose' !->
  before = '<p>Some</p><p>Thing.</p><p>Something. Some<b>th</b>ing.</p><div>Some</div><div>Thing! Something</div>'
  d = div!
  d.innerHTML = before
  Fibre d .replace /\bsomething\b/gi, \Nothing
  html-equal d.innerHTML, '<p>some</p><p>thing.</p><p>nothing. noth<b>in</b>g.</p><div>some</div><div>thing! nothing</div>'

  d.innerHTML = before
  Fibre d .wrap /\bsomething\b/gi, \x
  html-equal d.innerHTML, '<p>some</p><p>thing.</p><p><x>something</x>. <x>some</x><b><x>th</x></b><x>ing</x>.</p><div>some</div><div>thing! <x>something</x></div>'

test 'Add boundaries' !->
  before = '<p>Some</p><p>Thing.</p><p>Something. Some<b>th</b>ing.</p><div>Some</div><div>Thing! Something</div><nav><b>Some</b><custom-p>Thing.</custom-p><custom-a>Something.</custom-a><custom-a>Some</custom-a><custom-a>thing</custom-a></nav>'
  d = div!
  d.innerHTML = before
  Fibre d .wrap /\bsomething\b/gi, \x
  html-equal d.innerHTML, '<p>some</p><p>thing.</p><p><x>something</x>. <x>some</x><b><x>th</x></b><x>ing</x>.</p><div>some</div><div>thing! <x>something</x></div><nav><b><x>some</x></b><custom-p><x>thing</x>.</custom-p><custom-a><x>something</x>.</custom-a><custom-a><x>some</x></custom-a><custom-a><x>thing</x></custom-a></nav>'

  d.innerHTML = before
  Fibre( d ).addBoundary( 'custom-p, custom-a' ).wrap( /\bsomething\b/gi, \x )
  html-equal d.innerHTML, '<p>some</p><p>thing.</p><p><x>something</x>. <x>some</x><b><x>th</x></b><x>ing</x>.</p><div>some</div><div>thing! <x>something</x></div><nav><b>some</b><custom-p>thing.</custom-p><custom-a><x>something</x>.</custom-a><custom-a>some</custom-a><custom-a>thing</custom-a></nav>'

  d.innerHTML = before
  Fibre( d, true ).addBoundary( 'custom-p, custom-a' ).wrap( /\bsomething\b/gi, \x )
  html-equal d.innerHTML, '<p><x>some</x></p><p><x>thing</x>.</p><p><x>something</x>. <x>some</x><b><x>th</x></b><x>ing</x>.</p><div><x>some</x></div><div><x>thing</x>! something</div><nav><b>some</b><custom-p>thing.</custom-p><custom-a><x>something</x>.</custom-a><custom-a>some</custom-a><custom-a>thing</custom-a></nav>'

  d.innerHTML = before
  Fibre( d ).addBoundary( 'custom-p' ).addBoundary( 'custom-a' ).wrap( /\bsomething\b/gi, \x )
  html-equal d.innerHTML, '<p>some</p><p>thing.</p><p><x>something</x>. <x>some</x><b><x>th</x></b><x>ing</x>.</p><div>some</div><div>thing! <x>something</x></div><nav><b>some</b><custom-p>thing.</custom-p><custom-a><x>something</x>.</custom-a><custom-a>some</custom-a><custom-a>thing</custom-a></nav>'

  d.innerHTML = before
  Fibre( d, true ).addBoundary( 'custom-p' ).addBoundary( 'custom-a' ).wrap( /\bsomething\b/gi, \x )
  html-equal d.innerHTML, '<p><x>some</x></p><p><x>thing</x>.</p><p><x>something</x>. <x>some</x><b><x>th</x></b><x>ing</x>.</p><div><x>some</x></div><div><x>thing</x>! something</div><nav><b>some</b><custom-p>thing.</custom-p><custom-a><x>something</x>.</custom-a><custom-a>some</custom-a><custom-a>thing</custom-a></nav>'

test 'Remove boundaries' !->
  before = '<p>Some</p><p>Thing.</p><p>Something. Some<b>th</b>ing.</p><div>Some</div><div>Thing! Something</div><nav><b>Some</b><custom-p>Thing.</custom-p><custom-a>Something.</custom-a><custom-a>Some</custom-a><custom-a>thing</custom-a></nav>'
  d = div!
  d.innerHTML = before
  Fibre( d )
    .addBoundary( 'custom-p, custom-a' )
    .wrap( /\bsomething\b/gi, \x )
    .removeBoundary()
    .wrap( /\bsomething\b/gi, \y )
  html-equal d.innerHTML, '<p>some</p><p>thing.</p><p><x><y>something</y></x>. <x><y>some</y></x><b><x><y>th</y></x></b><x><y>ing</y></x>.</p><div>some</div><div>thing! <x><y>something</y></x></div><nav><b><y>some</y></b><custom-p><y>thing</y>.</custom-p><custom-a><x><y>something</y></x>.</custom-a><custom-a><y>some</y></custom-a><custom-a><y>thing</y></custom-a></nav>'


module \Revert
test 'Revert mechanism' !->
  before = 'Hello, there!'
  after = 'Hello, <x>world</x>!'
  d = div!
  r = /\bthere\b/gi

  d.innerHTML = before
  fibre = Fibre d
    .wrap r, \x
    .replace r, \world
  html-equal d.innerHTML, after, 'Before the revert'

  try
    fibre.revert \all
  html-equal d.innerHTML, before, 'Rightfully reverted'

  fibre
    .wrap r, \x
    .replace r, \world
  html-equal d.innerHTML, after, 'Post-revert wrap/replace'

module 'Portion mode'
test 'Portion mode: first' !->
  before = 'Testing 123 HE<em>LLO there</em>'
  d = div!

  d.innerHTML = before
  Fibre d,  .setMode \first .wrap /hello/i, \span
  htmlEqual d.innerHTML, 'Testing 123 <span>HELLO</span><em> there</em>', \Wrap

  d.innerHTML = before
  Fibre d  .setMode \first .replace /hello/i, \hola
  htmlEqual d.innerHTML, 'Testing 123 hola<em> there</em>', \Replace

test 'Portion mode: retain' !->
  before = 'Testing 123 HE<em>LLO there</em>'
  d = div!

  d.innerHTML = before
  fibre = Fibre d .setMode \retain .wrap /hello/i, \span
  htmlEqual d.innerHTML, 'testing 123 <span>he</span><em><span>llo</span> there</em>', \Wrap

  d.innerHTML = before
  Fibre d .setMode \retain .replace /hello/i, \hola
  htmlEqual d.innerHTML, 'Testing 123 ho<em>la there</em>', \Replace

module \Presets
test 'Prose (by default)' !->
  before = '<p>Some</p>Thing!<em>Something</em><strong>Some</strong>Thing<span>Some</span><div>Thing</div><article>something</article><style>something</style>'
  d = div!
  d.innerHTML = before
  x = Fibre d .wrap /something/ig, \x
  htmlEqual d.innerHTML, '<p>some</p>thing!<em><x>something</x></em><strong><x>some</x></strong><x>thing</x><span>some</span><div>thing</div><article><x>something</x></article><style>something</style>'

test 'No preset' !->
  before = '<p>Some</p>Thing!<em>Something</em><strong>Some</strong>Thing<span>Some</span><div>Thing</div><style>something</style>'
  d = div!
  d.innerHTML = before
  x = Fibre d, true .wrap /something/ig, \x
  htmlEqual d.innerHTML, '<p><x>some</x></p><x>thing</x>!<em><x>something</x></em><strong><x>some</x></strong><x>thing</x><span><x>some</x></span><div><x>thing</x></div><style><x>something</x></style>'

