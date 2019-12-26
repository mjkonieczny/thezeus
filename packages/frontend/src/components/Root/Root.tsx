import React, { SFC } from 'react'
import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import VertexModel from '../../models'
import Vertex from '../Vertex'

import { vertexSelector } from '../../store/vertex'

const VERTEX = gql`
  query Vertex($vertex: String!) {
    Vertex(name: $vertex) {
      name
      adjacents {
        name
      }
    }
  }
`

const Root: SFC = () => {
  const { loading, error, data } = useQuery(VERTEX, {
    variables: {
      vertex: useSelector(vertexSelector),
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>

  return (
    <>
      {
        data.Vertex.map((vertex: VertexModel) => (
          <Vertex key={vertex.name} vertex={vertex} />
        ))
      }
    </>
  )
}

export default Root
