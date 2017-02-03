import App from './content/App'
import React from 'react'
import { render } from 'react-dom'
import client from './graphql'
import { ApolloProvider } from 'react-apollo'
import { isRts, getContainerSelector, getLocale } from './utils'

const containerSelector = getContainerSelector()
const container = document.querySelector(containerSelector)

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
