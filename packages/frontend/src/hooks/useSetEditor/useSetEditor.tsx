import React, { SFC, useState, useEffect } from 'react'
import { useMutation } from 'react-apollo'
import { Set } from '../../models'
import { useModal } from '..'

// @ts-ignore
import { UpdateSet } from '../../schema/set.graphql'

import styles from './useSetEditor.module.scss'

interface UseSetEditor {
  openEditor: () => void;
  SetEditor: SFC;
}

export const useSetEditor = ({ name, description }: Set): UseSetEditor => {
  const { setOpen, Modal } = useModal()

  return {
    openEditor: () => setOpen(true),
    SetEditor: () => {
      const [value, setValue] = useState(description || '')
      const [updateSet] = useMutation(UpdateSet)

      useEffect(() => () => {
        if (description !== value) {
          updateSet({ variables: { name, description: value } })
        }
      }, [updateSet, value])

      return (
        <Modal>
          <div className={styles.set}>
            <span className={styles.name}>{name}</span>
            <textarea
              className={styles.description}
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </div>
        </Modal>
      )
    },
  }
}
