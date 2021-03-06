.PHONY: build

build:
	-rm build.crx
	NODE_ENV=production npm run build
	"`$$(npm bin)/chrome-location`"  --pack-extension=./build --pack-extension-key=./dist/lobbylayer.pem
	mv build.crx dist/lobbylayer.crx

firefox: build
	cd build && zip -r ../dist/lobbylayer-firefox.zip *
