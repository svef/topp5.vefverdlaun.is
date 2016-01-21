
all: npm test build

npm:
	npm install --loglevel=error

test: jshint jasmine

jasmine:
	@./node_modules/.bin/jasmine

jshint:
	@./node_modules/.bin/eslint ./gulpfile.js
	@./node_modules/.bin/eslint ./tasks
	@./node_modules/.bin/eslint ./src/js
	@./node_modules/.bin/eslint ./spec

build: gulpbuild requirejs

gulpbuild:
	@./node_modules/.bin/gulp build --env=production

requirejs:
	@./node_modules/.bin/r.js -o build-require.js
