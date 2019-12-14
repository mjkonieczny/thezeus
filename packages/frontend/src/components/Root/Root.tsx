import React, { useState, useEffect } from 'react'
import { createApolloFetch } from 'apollo-fetch';

import Vertex from '../Vertex'

const fetch = createApolloFetch({
  uri: 'http://localhost:3001/graphql',
});

const Root = () => {
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

  console.log(response)

  return (
    <>
      {
        response.map(Vertex)
      }
    </>
  )
}

export default Root