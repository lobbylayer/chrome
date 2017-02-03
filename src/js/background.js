require('file-loader?name=logo16.png!../icon16.png')
require('file-loader?name=logo48.png!../icon48.png')
require('file-loader?name=logo128.png!../icon128.png')

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {})
