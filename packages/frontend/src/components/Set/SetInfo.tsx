import React, { SFC } from 'react'
import { Set } from '../../models'
import NoteInfo from '../Note/NoteInfo'

interface SetInfoProps {
  set: Set;
}

const SetInfo: SFC<SetInfoProps> = ({
  set: {
    name,
    description,
    subsets,
    notes,
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
    {
      notes && notes.map(note => (
        <NoteInfo key={note.name} note={note} />
      ))
    }
  </div>
)

export default SetInfo
