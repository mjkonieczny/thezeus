import React, { SFC } from 'react'
import { Query } from 'react-apollo'

import { useParams } from 'react-router'
import { Set } from '../../models'
import SetComponent from '../Set'

// @ts-ignore
import { Set as SetQuery } from '../../schema/set.graphql'

interface Params {
  name: string;
}

interface Data {
  Set: Set[];
}

export const SetRoute: SFC = () => {
  const { name } = useParams()

  return (
    <Query<Data, Params> query={SetQuery} variables={{ name }}>
      {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :</p>
        return (
          <>
            {
              data.Set.map((set: Set) => (
                <SetComponent key={set.name} set={set} />
              ))
            }
          </>
        )
      }
    }
    </Query>
  )
}
