import { hot } from 'react-hot-loader'
import React, { SFC } from 'react'
import './App.css'

import Root from './components/Root'

const App: SFC = () => (
  <div className="App">
    <Root />
  </div>
)

export default hot(module)(App)
