import { hot } from 'react-hot-loader'
import React, { SFC } from 'react'
import { Router, Switch, Route } from 'react-router'
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history'

import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import { Provider } from 'react-redux'
import createStore from './store'

import { SetRoute } from './components/Routes'
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
      <Router history={createBrowserHistory()}>
        <div className={styles.app}>
          <div>
            <Switch>
              <Route path="/set/:name"><SetRoute /></Route>
            </Switch>
          </div>
          <Commander />
        </div>
      </Router>
    </ApolloProvider>
  </Provider>
)

export default hot(module)(App)
