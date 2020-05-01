
require! <[ gulp ]>
connect = require \gulp-connect
concat = require \gulp-concat-util
lsc = require \gulp-livescript
browserify = require \gulp-browserify
jade = require \gulp-jade
watch = require \gulp-watch
qunit = require \gulp-qunit
pkg = require \./package.json

const VERSION = pkg.version
const PATH-FINDER = './node_modules/findAndReplaceDOMText/src/findAndReplaceDOMText.js'
const EXPOSED = '// EXPOSE\nif (typeof define===\'function\'&&define.amd){define(function(){return exposed});}else if(typeof module!==\'undefined\'&&module.exports){module.exports=exposed;}else{window.findAndReplaceDOMText = exposed;}\n// EXPOSE'

src = -> gulp.src( it ).pipe( watch( it ))

gulp.task \server !->
  connect.server {
    port: 5678
    livereload: true
  }

gulp.task \build !->
  gulp.src <[ src/intro.js src/fibre.js src/post-expose.js src/finder.js src/outro.js ]>
    .pipe concat \fibre.js {
      process: ( src ) ->
        src.replace /@VERSION/, VERSION 
    }
    .pipe concat.header """
        /*!
         * Fibre.js v#{VERSION} | MIT License | github.com/ethantw/fibre.js
         * Based on findAndReplaceDOMText
         */\n
      """
    .pipe gulp.dest \./dist/

gulp.task \compile:dep !->
  gulp.src PATH-FINDER
    .pipe concat \finder.js {
      process: ( src ) ->
        src
          .replace 'window.findAndReplaceDOMText =' ''
          .replace /;$/ ''
          .replace /;(\s+)?\n/g \\n
          .replace /\n(\t+)/g, ( mat, tab ) ->
             '\n' + tab.replace /\t/g, '  ' 
    }
    .pipe gulp.dest \./src/

  gulp.src PATH-FINDER
    .pipe concat \finder.umd.js {
      process: ( src ) ->
        src
          .replace 'window.findAndReplaceDOMText =' \void
          .replace '\treturn exposed;' EXPOSED
    }
    .pipe gulp.dest \./src/


gulp.task \test ->
  return gulp.src \./test/index.html
    .pipe qunit!

gulp.task \test:demo !->
  src \test/*.ls
    .pipe lsc!
    .pipe browserify!
    .pipe gulp.dest \./test/
  src \test/*.jade
    .pipe jade { +pretty }
    .pipe gulp.dest \./test/

gulp.task \watch <[ test:demo ]> !->
  gulp.watch \src/*.js <[ build ]>
gulp.task \dep <[ compile:dep ]>
gulp.task \default <[ server build watch ]>

