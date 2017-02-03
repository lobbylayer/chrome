.PHONY: build

build:
	-rm build.crx
	NODE_ENV=production npm run build
	"`$$(npm bin)/chrome-location`"  --pack-extension=./build --pack-extension-key=./lobbylayer.pem
	mv build.crx lobbylayer.crx
