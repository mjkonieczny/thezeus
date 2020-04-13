import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router'
import uuid from 'uuid/v4'

import {
  CreateNode,
  DeleteNode,
  AddChild,
// @ts-ignore
} from '../schema/node.graphql'

export const useInterpreter = (): (_: string) => void => {
  const [createNode] = useMutation(CreateNode)
  const [deleteNode] = useMutation(DeleteNode)
  const [addChild] = useMutation(AddChild)

  const history = useHistory()

  return (value: string) => {
    const [command, first, second] = value.split('/')

    switch (command) {
      case 'cv':
        createNode({ variables: { id: uuid(), text: first, description: second } })
        break
      case 'dv':
        deleteNode({ variables: { id: first } })
        break
      case 'ac':
        addChild({ variables: { from: first, to: second } })
        break
      case 'node':
        history.push(`/node/${first}`)
        break

      default:
        console.log('Wrong command')
        break
    }
  }
}
