import React, { SFC } from 'react'
import VertexModel from '../../models'

interface VertexProps {
  vertex: VertexModel;
}

const VertexComponent: SFC<VertexProps> = ({
  vertex: {
    name,
    adjacents,
  },
}) => (
  <>
    <span>{name}</span>
    {
      adjacents && adjacents.map(adjacent => (
        <div key={adjacent.name}>
          <span>
            {name}
          </span>
          <VertexComponent vertex={adjacent} />
        </div>
      ))
    }
  </>
)

export default VertexComponent
