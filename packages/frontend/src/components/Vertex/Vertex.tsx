import React, { SFC } from 'react'

interface Vertex {
  name: string;
  vertices: Vertex[];
}

const Vertex: SFC<Vertex> = (vertex: Vertex) => (
  <>
    <span>{vertex.name}</span>
    {
      vertex.vertices && vertex.vertices.map((v) => (
        <div>
          <span>
            {vertex.name}
          </span>
          {Vertex(v)}
        </div>
      ))
    }
  </>
)

export default Vertex
