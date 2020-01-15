import React, { SFC, useState, useEffect } from 'react'
import { useMutation } from 'react-apollo'
import { Set } from '../../models'
import { useModal } from '..'

// @ts-ignore
import { UpdateSet } from '../../schema/set.graphql'

interface UseSetEditor {
  openEditor: () => void;
  SetEditor: SFC;
}

export const useSetEditor = ({ name, description }: Set): UseSetEditor => {
  const { setOpen, Modal } = useModal()

  return {
    openEditor: () => setOpen(true),
    SetEditor: () => {
      const [value, setValue] = useState(description)
      const [updateSet] = useMutation(UpdateSet)

      useEffect(() => () => updateSet({ variables: { name, description: value } }))

      return (
        <Modal>
          <span>{name}</span>
          <textarea value={value} onChange={e => setValue(e.target.value)} />
        </Modal>
      )
    },
  }
}
