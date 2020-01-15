/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { SFC } from 'react'
import { Note } from '../../models'
import { useNoteEditor } from '../../hooks'

import SourceComponent from '../Source'

import styles from './note.module.scss'

interface NoteProps {
  note: Note;
}

const NoteComponent: SFC<NoteProps> = ({
  note,
}) => {
  const {
    name,
    sources,
  } = note

  const { openEditor, NoteEditor } = useNoteEditor(note)

  return (
    <>
      <NoteEditor />
      <div className={styles.note}>
        <span className={styles.name} onClick={openEditor}>{name}</span>
        {
      sources && sources.map(source => (
        <SourceComponent key={source.link} source={source} />
      ))
    }
      </div>
    </>
  )
}

export default NoteComponent
