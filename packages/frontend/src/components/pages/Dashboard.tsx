import React, { SFC } from 'react'
import { Query } from 'react-apollo'

import { useParams } from 'react-router'
import { Node as NodeModel } from '../../models'
import { Node as NodeComponent } from '../Node'

// @ts-ignore
import { AllNodes as AllNodesQuery } from '../../schema/node.graphql'

interface Params {
  text: string;
}

interface Data {
  Node: NodeModel[];
}

export const Dashboard: SFC = () => {
  const { text } = useParams()

  return (
    <Query<Data, Params> query={AllNodesQuery} variables={{ text: unescape(text) }}>
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
