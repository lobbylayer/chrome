import App from './content/App'
import React from 'react'
import { render } from 'react-dom'
import client from './graphql'
import { ApolloProvider } from 'react-apollo'

// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  // If the received message has the expected format...
  if (msg.text === 'report_back') {
    // Call the specified callback, passing
    // the web-page's DOM content as argument
    sendResponse(document.all[0].outerHTML)
  }
})

const container = document.getElementsByClassName('main-article-content')[0]
if (container) {
  const content = document.createElement('div')
  container.insertBefore(content, container.firstChild)
  render(
    (
      <ApolloProvider client={client}>
        <App content={container.innerText} />
      </ApolloProvider>
    ),
    content
  )
}
