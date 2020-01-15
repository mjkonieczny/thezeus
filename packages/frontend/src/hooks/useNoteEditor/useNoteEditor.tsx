import React, { SFC, useState, useEffect } from 'react'
import { useMutation } from 'react-apollo'
import { Note } from '../../models'
import { useModal } from '..'

// @ts-ignore
import { UpdateNote } from '../../schema/note.graphql'

import styles from './useNoteEditor.module.scss'

interface UseNoteEditor {
  openEditor: () => void;
  NoteEditor: SFC;
}

export const useNoteEditor = ({ name, text }: Note): UseNoteEditor => {
  const { setOpen, Modal } = useModal()

  return {
    openEditor: () => setOpen(true),
    NoteEditor: () => {
      const [value, setValue] = useState(text || '')
      const [updateNote] = useMutation(UpdateNote)

      useEffect(() => () => {
        if (text !== value) {
          updateNote({ variables: { name, text: value } })
        }
      }, [updateNote, value])

      return (
        <Modal>
          <div className={styles.note}>
            <span className={styles.name}>{name}</span>
            <textarea
              className={styles.text}
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </div>
        </Modal>
      )
    },
  }
}
