import React, { useState, useEffect, SFC } from 'react'
import { createApolloFetch } from 'apollo-fetch'

import VertexComponent from '../Vertex'

const fetch = createApolloFetch({
  uri: 'http://localhost:3001/graphql',
})

const Root: SFC = () => {
  const [response, setResponse] = useState([])
  useEffect(() => {
    fetch({
      query: `{
        Vertex { 
          name
          vertices {
            name
          }
        }
      }`,
    }).then(({ data: { Vertex } }: { data: { Vertex: any[] } }) => setResponse(Vertex))
  }, [])

  return (
    <>
      {
        response.map(VertexComponent)
      }
    </>
  )
}

export default Root
