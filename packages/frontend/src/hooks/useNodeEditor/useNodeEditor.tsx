import React, {
  SFC, useState, useEffect,
} from 'react'
import { useMutation } from 'react-apollo'
import { Node } from '../../models'
import { useModal } from '..'

// @ts-ignore
import { UpdateNode } from '../../schema/node.graphql'

import styles from './useNodeEditor.module.scss'

type UseNodeEditor = [React.Dispatch<React.SetStateAction<boolean>>, SFC]

export const useNodeEditor = ({ id, text }: Node): UseNodeEditor => {
  const [setOpen, Modal] = useModal()
  const [value, setValue] = useState(text || '')
  const [updateNode] = useMutation(UpdateNode)

  useEffect(() => () => {
    if (text !== value) {
      updateNode({ variables: { id, text: value } })
    }
  }, [id, text, updateNode, value])

  return [
    setOpen,
    () => (
      <Modal>
        <div className={styles.node}>
          <textarea
            className={styles.text}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
      </Modal>
    ),
  ]
}
