import ApolloClient, { createNetworkInterface } from 'apollo-client'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://lobbylayer-api.scapp.io/graphql'
  })
})

export default client
