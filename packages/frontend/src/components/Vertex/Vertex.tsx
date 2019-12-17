import React, { SFC } from 'react'
import VertexModel from '../../models'

interface VertexProps {
  vertex: VertexModel;
}

const Vertex: SFC<VertexProps> = ({
  vertex: {
    name,
    adjacents,
  },
}) => (
  <div style={{ marginLeft: '20px' }}>
    <span>{name}</span>
    {
      adjacents && adjacents.map(adjacent => (
        <Vertex key={adjacent.name} vertex={adjacent} />
      ))
    }
  </div>
)

export default Vertex
