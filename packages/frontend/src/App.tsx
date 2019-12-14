import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';

import Root from './components/Root'

const App = () => {
  
  return (
    <div className="App">
      <Root/>      
    </div>
  );
};

export default hot(module)(App);
