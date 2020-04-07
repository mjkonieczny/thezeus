import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router'

import {
  CreateNode,
  DeleteNode,
// @ts-ignore
} from '../schema/node.graphql'

export const useInterpreter = (): (_: string) => void => {
  const [createNode] = useMutation(CreateNode)
  const [deleteNode] = useMutation(DeleteNode)

  const history = useHistory()

  return (value: string) => {
    const [command, first, second] = value.split('/')

    switch (command) {
      case 'cv':
        createNode({ variables: { id: first, text: second } })
        break
      case 'dv':
        deleteNode({ variables: { id: first } })
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
