import React, { SFC, useState } from 'react'
import { Modal } from '@material-ui/core'

import styles from './useModal.module.scss'

type UseModal = [React.Dispatch<React.SetStateAction<boolean>>, SFC]

export const useModal = (): UseModal => {
  const [isOpen, setOpen] = useState(false)

  return [
    setOpen,
    ({ children }) => (
      <Modal open={isOpen} onClose={() => setOpen(false)}>
        <div className={styles.modal}>
          {children}
        </div>
      </Modal>
    ),
  ]
}
