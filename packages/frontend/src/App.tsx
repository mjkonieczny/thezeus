import { hot } from 'react-hot-loader';
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [response, setResponse] = useState('no data');
  useEffect(() => {
    fetch('http://localhost:3001/').then((res) => res.json()).then((value) => setResponse(value.data));
  });
  return (
    <div className="App">
      <span>{response}</span>
    </div>
  );
};

export default hot(module)(App);
