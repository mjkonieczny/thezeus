import React, { SFC } from 'react'
import { useSelector } from 'react-redux'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import Set from '../../models'
import SetInfo from '../Set'

import { setNameSelector } from '../../store/set'

const SET = gql`
  query Set($name: String!) {
    Set(name: $name) {
      name
      description
      subsets {
        name
      }
    }
  }
`

interface Params {
  name: string;
}

interface Data {
  Set: Set[];
}

const Root: SFC = () => (
  <Query<Data, Params> query={SET} variables={{ name: useSelector(setNameSelector) }}>
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :</p>
        return (
          <>
            {
              data.Set.map((set: Set) => (
                <SetInfo key={set.name} set={set} />
              ))
            }
          </>
        )
      }
    }
  </Query>
)

export default Root
