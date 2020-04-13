import React, { SFC } from 'react'
import { Query } from 'react-apollo'

import { useParams } from 'react-router'
import { Node as NodeModel } from '../../models'
import { Node as NodeComponent } from '../Node'

// @ts-ignore
import { Node as NodeQuery } from '../../schema/node.graphql'

interface Params {
  id: string;
}

interface Data {
  Node: NodeModel[];
}

export const Node: SFC = () => {
  const { id } = useParams()

  return (
    <Query<Data, Params> query={NodeQuery} variables={{ id: unescape(id) }}>
      {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :</p>
        return (
          <>
            {
              data.Node.map((node: NodeModel) => (
                <NodeComponent key={node.id} node={node} />
              ))
            }
          </>
        )
      }
    }
    </Query>
  )
}
