test:
		./node_modules/.bin/eslint lib/
		./node_modules/.bin/mocha --reporter nyan

.PHONY: test
