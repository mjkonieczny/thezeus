/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { SFC } from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { Node as NodeModel } from '../../models'

import styles from './node.module.scss'

interface NodeProps extends RouteComponentProps {
  node: NodeModel;
}

const NodeComponent: SFC<NodeProps> = ({
  node,
  history,
}) => {
  const {
    text,
    adjacents,
  } = node

  return (
    <div className={styles.node}>
      <span className={styles.name} onClick={() => history.push(escape(text))}>{text}</span>
      {
        adjacents && adjacents.map(adj => (
          <Node key={adj.id} node={adj} />
        ))
      }
    </div>
  )
}

export const Node = withRouter(NodeComponent)
