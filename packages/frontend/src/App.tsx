import { hot } from 'react-hot-loader'
import React, { SFC } from 'react'
import { Router, Switch, Route } from 'react-router'
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history'

import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import { Node } from './components/Routes'
import Commander from './components/Commander'

import {
  AllNodes as AllNodesQuery,
  Node as NodeQuery
// @ts-ignore
} from './schema/node.graphql'

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
            <Route exact path="/"><Node query={AllNodesQuery}/></Route>
            <Route exact path="/:text"><Node query={NodeQuery}/></Route>
          </Switch>
        </div>
        <Commander />
      </div>
    </Router>
  </ApolloProvider>
)

export default hot(module)(App)
