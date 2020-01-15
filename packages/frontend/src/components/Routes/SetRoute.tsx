import React, { SFC } from 'react'
import { useSelector } from 'react-redux'
import { Query } from 'react-apollo'

import { Set } from '../../models'
import SetComponent from '../Set'
import { setNameSelector } from '../../store/set'

// @ts-ignore
import { Set as SetQuery } from '../../schema/set.graphql'

interface Params {
  name: string;
}

interface Data {
  Set: Set[];
}

export const SetRoute: SFC = () => (
  <Query<Data, Params> query={SetQuery} variables={{ name: useSelector(setNameSelector) }}>
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
