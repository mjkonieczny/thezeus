import React, { SFC } from 'react'
import { Note } from '../../models'

import SourceComponent from '../Source'

import styles from './note.module.scss'

interface NoteProps {
  note: Note;
}

const NoteComponent: SFC<NoteProps> = ({
  note: {
    name,
    sources,
  },
}) => (
  <div className={styles.note}>
    <span className={styles.name}>{name}</span>
    {
      sources && sources.map(source => (
        <SourceComponent key={source.link} source={source} />
      ))
    }
  </div>
)

export default NoteComponent
