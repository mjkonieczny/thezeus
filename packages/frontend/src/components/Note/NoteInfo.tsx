import React, { SFC } from 'react'
import { Note } from '../../models'

import styles from './note.module.scss'

interface NoteInfoProps {
  note: Note;
}

const NoteInfo: SFC<NoteInfoProps> = ({
  note: {
    name,
  },
}) => (
  <div className={styles.noteInfo}>
    <span className={styles.name}>{name}</span>
  </div>
)

export default NoteInfo
