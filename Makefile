.PHONY: dev check
dev:
	yarn run docs:dev

NODE=node --no-warnings

generate: check
	cd data && $(NODE) generate.js

check:
	cd data && $(NODE) check.js

build:
	yarn docs:build

clean:
	rm -rf docs/.vuepress/dist