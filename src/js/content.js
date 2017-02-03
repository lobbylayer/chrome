import App from './content/App'
import React from 'react'
import { render } from 'react-dom'
import client from './graphql'
import { ApolloProvider } from 'react-apollo'
import { isRts, getLocale } from './utils'

// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  // If the received message has the expected format...
  if (msg.text === 'report_back') {
    // Call the specified callback, passing
    // the web-page's DOM content as argument
    sendResponse(document.all[0].outerHTML)
  }
})

const container = isRts()
  ? document.querySelector('.main > article')
  : document.querySelector('.main-article-content')

if (container) {
  const content = document.createElement('div')
  if (isRts()) {
    content.className = 'rts-module-infosport-body'
  }
  // container.insertBefore(content, container.firstChild)
  container.appendChild(content)
  render(
    (
      <ApolloProvider client={client}>
        <App content={container.innerText} locale={getLocale()} />
      </ApolloProvider>
    ),
    content
  )
}
