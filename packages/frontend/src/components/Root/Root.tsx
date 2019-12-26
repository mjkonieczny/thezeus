import React, { SFC } from 'react'
import { useSelector } from 'react-redux'
import { Query } from 'react-apollo'
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

interface Params {
  vertex: string;
}

interface Data {
  Vertex: VertexModel[];
}

const Root: SFC = () => (
  <Query<Data, Params> query={VERTEX} variables={{ vertex: useSelector(vertexSelector) }}>
    {
      ({ loading, error, data }) => {
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
    }
  </Query>
)

export default Root
