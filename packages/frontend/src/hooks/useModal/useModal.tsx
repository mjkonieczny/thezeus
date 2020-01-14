import React, { SFC, useState } from 'react'
import { Modal } from '@material-ui/core'

import styles from './useModal.module.scss'

interface UseModal {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  Modal: SFC;
}

export const useModal = (): UseModal => {
  const [isOpen, setOpen] = useState(false)

  return {
    setOpen,
    Modal: ({ children }) => (
      <Modal
        open={isOpen}
        onClose={() => setOpen(false)}
      >
        <div className={styles.modal}>
          {children}
        </div>
      </Modal>
    ),
  }
}
