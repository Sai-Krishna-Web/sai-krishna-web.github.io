
all ::
	make dist

qunit ::
	rm -rf test/qunit.*
	ln node_modules/qunitjs/qunit/qunit.js test/qunit.js
	ln node_modules/qunitjs/qunit/qunit.css test/qunit.css

finder.js ::
	gulp dep

test/js ::
	gulp watch

dist ::
	make dep
	make finder.js
	gulp build

