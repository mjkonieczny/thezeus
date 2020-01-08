import React, { SFC } from 'react'
import Set from '../../models'

interface SetInfoProps {
  set: Set;
}

const SetInfo: SFC<SetInfoProps> = ({
  set: {
    name,
    description,
    subsets,
  },
}) => (
  <div style={{ marginLeft: '20px' }}>
    <span>{name}</span>
    <span>{description}</span>
    {
      subsets && subsets.map(subset => (
        <SetInfo key={subset.name} set={subset} />
      ))
    }
  </div>
)

export default SetInfo
