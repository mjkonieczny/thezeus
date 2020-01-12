import React, { SFC } from 'react'
import { Note } from '../../models'

import SourceComponent from '../Source'

import styles from './note.module.scss'

interface NoteInfoProps {
  note: Note;
}

const NoteInfo: SFC<NoteInfoProps> = ({
  note: {
    name,
    sources,
  },
}) => (
  <div className={styles.noteInfo}>
    <span className={styles.name}>{name}</span>
    {
      sources && sources.map(source => (
        <SourceComponent key={source.link} source={source} />
      ))
    }
  </div>
)

export default NoteInfo
