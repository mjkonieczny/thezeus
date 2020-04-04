/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { SFC } from 'react'
import { Node as NodeModel } from '../../models'

import { useNodeEditor } from '../../hooks'

import styles from './node.module.scss'

interface NodeProps {
  node: NodeModel;
}

export const Node: SFC<NodeProps> = ({
  node,
}) => {
  const {
    text,
    adjacents,
  } = node

  const [setOpen, Editor] = useNodeEditor(node)

  return (
    <>
      <Editor />
      <div className={styles.node}>
        <span className={styles.name} onClick={() => setOpen(true)}>{text}</span>
        {
          adjacents && adjacents.map(adj => (
            <Node key={adj.id} node={adj} />
          ))
        }
      </div>
    </>
  )
}
