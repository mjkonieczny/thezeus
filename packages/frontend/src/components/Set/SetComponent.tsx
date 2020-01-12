import React, { SFC } from 'react'
import { Set } from '../../models'
import NoteComponent from '../Note'

import styles from './set.module.scss'

interface SetProps {
  set: Set;
}

const SetComponent: SFC<SetProps> = ({
  set: {
    name,
    description,
    subsets,
    notes,
  },
}) => (
  <div className={styles.set}>
    <span className={styles.name}>{name}</span>
    <span>{description}</span>
    {
      subsets && subsets.map(subset => (
        <SetComponent key={subset.name} set={subset} />
      ))
    }
    {
      notes && notes.map(note => (
        <NoteComponent key={note.name} note={note} />
      ))
    }
  </div>
)

export default SetComponent
