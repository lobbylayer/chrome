.PHONY: build

build:
	-rm -r build
	-rm build.crx
	NODE_ENV=production npm run build
