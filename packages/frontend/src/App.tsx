import { hot } from 'react-hot-loader'
import React, { SFC } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import Root from './components/Root'
import Commander from './components/Commander'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
})

const App: SFC = () => (
  <ApolloProvider client={client}>
    <Root />
    <Commander />
  </ApolloProvider>
)

export default hot(module)(App)
