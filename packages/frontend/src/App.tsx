import { hot } from 'react-hot-loader'
import React, { SFC } from 'react'
import { Router, Switch, Route } from 'react-router'
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history'

import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import { Dashboard, Node } from './components'
import Commander from './components/Commander'

import './styles/main.scss'
import styles from './app.module.scss'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
})

const App: SFC = () => (
  <ApolloProvider client={client}>
    <Router history={createBrowserHistory()}>
      <div className={styles.app}>
        <div>
          <Switch>
            <Route exact path="/"><Dashboard /></Route>
            <Route exact path="/node/:id"><Node /></Route>
          </Switch>
        </div>
        <Commander />
      </div>
    </Router>
  </ApolloProvider>
)

export default hot(module)(App)
