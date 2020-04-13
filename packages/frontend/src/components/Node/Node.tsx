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
    id,
    text,
    children,
    parents,
  } = node

  return (
    <div className={styles.node}>
      <span className={styles.name} onClick={() => history.push(`/node/${escape(id)}`)}>{text}</span>
      {
        children && children.length > 0 && (
          <>
            <div>children</div>
            {
              children.map(child => (
                <Node key={child.id} node={child} />
              ))
            }
          </>
        )
      }
      {
        parents && parents.length > 0 && (
          <>
            <div>parents</div>
            {
              parents.map(parent => (
                <Node key={parent.id} node={parent} />
              ))
            }
          </>
        )
      }
    </div>
  )
}

export const Node = withRouter(NodeComponent)
