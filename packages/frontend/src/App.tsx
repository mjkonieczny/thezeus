import { hot } from 'react-hot-loader';
import React, { useState, useEffect } from 'react';
const { createApolloFetch } = require('apollo-fetch');
import './App.css';

const fetch = createApolloFetch({
  uri: 'http://localhost:3001/graphql',
});

const App = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    fetch({
      query: `{
        Vertex { 
          name
          vertices {
            name
          }
        }
      }`
    }).then(({ data: { Vertex } }: { data: { Vertex: any[] } }) => setResponse(Vertex));
  }, []);
  return (
    <div className="App">
      {
        response.map(v => (
          <div>
            <span>{v.name}</span>
            {
              v.vertices.map((a: any) => (
                <div>
                  <span>Child { a.name }</span>
                  </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default hot(module)(App);
