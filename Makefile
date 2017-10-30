.PHONY: webpack serve

webpack:
	node_modules/.bin/webpack --watch

serve:
	node serve.js
