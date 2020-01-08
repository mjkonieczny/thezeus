import { useMutation } from '@apollo/react-hooks'
import { useDispatch } from 'react-redux'
import { searchSet } from '../store/set/actions'

import {
  CreateSet,
  DeleteSet,
  AddSubset,
  RemoveSubset,
// @ts-ignore
} from '../schema/set.graphql'

const useInterpreter = (): (_: string) => void => {
  const [createSet] = useMutation(CreateSet)
  const [deleteSet] = useMutation(DeleteSet)
  const [addSubset] = useMutation(AddSubset)
  const [removeSubset] = useMutation(RemoveSubset)

  const dispatch = useDispatch()

  return (value: string) => {
    const [command, first, second] = value.split(' ')

    switch (command) {
      case 'cv':
        createSet({ variables: { name: first } })
        break
      case 'dv':
        deleteSet({ variables: { name: first } })
        break
      case 'ae':
        addSubset({ variables: { from: first, to: second } })
        break
      case 're':
        removeSubset({ variables: { from: first, to: second } })
        break
      case 's':
        dispatch(searchSet(first))
        break

      default:
        console.log('Wrong command')
        break
    }
  }
}

export default useInterpreter
