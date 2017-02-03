import '../css/popup.css'
import Info from './popup/Info'
import React from 'react'
import { render } from 'react-dom'
import client from './graphql'
import { ApolloProvider } from 'react-apollo'

render(
  (
    <ApolloProvider client={client}>
      <Info />
    </ApolloProvider>
  ),
  window.document.getElementById('app-container')
)
