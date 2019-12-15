import React, { SFC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import VertexModel from '../../models'
import VertexComponent from '../Vertex'

const VERTEX = gql`
  {
    Vertex { 
      name
      adjacents {
        name
      }
    }
  }
`

const Root: SFC = () => {
  const { loading, error, data } = useQuery(VERTEX)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>

  return (
    <>
      {
        data.Vertex.map((vertex: VertexModel) => (
          <VertexComponent key={vertex.name} vertex={vertex} />
        ))
      }
    </>
  )
}

export default Root
