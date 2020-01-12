import React, { SFC } from 'react'
import { Source } from '../../models'

import styles from './source.module.scss'

interface SourceProps {
  source: Source;
}

const SourceComponent: SFC<SourceProps> = ({
  source: {
    link,
  },
}) => (
  <div className={styles.source}>
    <a className={styles.link} href={link}>{link}</a>
  </div>
)

export default SourceComponent
