/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { SFC } from 'react'
import { Set } from '../../models'
import NoteComponent from '../Note'

import { useSetEditor } from '../../hooks'

import styles from './set.module.scss'

interface SetProps {
  set: Set;
}

const SetComponent: SFC<SetProps> = ({
  set,
}) => {
  const {
    name,
    description,
    subsets,
    notes,
  } = set

  const { openEditor, SetEditor } = useSetEditor(set)

  return (
    <>
      <SetEditor />
      <div className={styles.set}>
        <span className={styles.name} onClick={openEditor}>{name}</span>
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
    </>
  )
}

export default SetComponent
