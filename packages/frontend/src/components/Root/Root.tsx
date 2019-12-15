import React, { useState, useEffect, SFC } from 'react'
import ApolloClient, { gql } from 'apollo-boost'

import VertexModel from '../../models'
import VertexComponent from '../Vertex'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
})

const Root: SFC = () => {
  const [response, setResponse] = useState([])
  useEffect(() => {
    client.query({
      query: gql`{
        Vertex { 
          name
          adjacents {
            name
          }
        }
      }`,
    }).then(({ data: { Vertex } }: { data: { Vertex: VertexModel[] } }) => setResponse(Vertex))
  }, [])

  return (
    <>
      {
        response.map(vertex => (
          <VertexComponent vertex={vertex} />
        ))
      }
    </>
  )
}

export default Root
