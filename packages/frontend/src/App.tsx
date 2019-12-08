import { hot } from 'react-hot-loader';
import React, { useState, useEffect } from 'react';
const { createApolloFetch } = require('apollo-fetch');
import './App.css';

const fetch = createApolloFetch({
  uri: 'http://localhost:3001/graphql',
});

const App = () => {
  const [response, setResponse] = useState('no data');
  useEffect(() => {
    fetch({
      query: '{ hello }'
    }).then((value) => setResponse(value.data.hello));
  });
  return (
    <div className="App">
      <span>{response}</span>
    </div>
  );
};

export default hot(module)(App);
