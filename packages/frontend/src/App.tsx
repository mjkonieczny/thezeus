import { hot } from 'react-hot-loader'
import React, { SFC } from 'react'

import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import { Provider } from 'react-redux'
import createStore from './store'

import Root from './components/Root'
import Commander from './components/Commander'

import './styles/main.scss'
import styles from './app.module.scss'

const store = createStore()

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
})

const App: SFC = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <div className={styles.app}>
        <div>
          <Root />
        </div>
        <Commander />
      </div>
    </ApolloProvider>
  </Provider>
)

export default hot(module)(App)
