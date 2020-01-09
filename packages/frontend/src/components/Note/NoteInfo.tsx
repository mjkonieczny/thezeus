import React, { SFC } from 'react'
import { Note } from '../../models'

interface NoteInfoProps {
  note: Note;
}

const NoteInfo: SFC<NoteInfoProps> = ({
  note: {
    name,
  },
}) => (
  <div>
    <span>{name}</span>
  </div>
)

export default NoteInfo
