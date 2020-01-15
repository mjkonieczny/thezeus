import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router'

import {
  CreateSet,
  DeleteSet,
  AddSubset,
  RemoveSubset,
  AddNote,
  // @ts-ignore
} from '../schema/set.graphql'

import {
  CreateNote,
  AddSource,
  // @ts-ignore
} from '../schema/note.graphql'

import {
  CreateSource,
  // @ts-ignore
} from '../schema/source.graphql'

export const useInterpreter = (): (_: string) => void => {
  const [createSet] = useMutation(CreateSet)
  const [deleteSet] = useMutation(DeleteSet)
  const [addSubset] = useMutation(AddSubset)
  const [removeSubset] = useMutation(RemoveSubset)
  const [createNote] = useMutation(CreateNote)
  const [addNote] = useMutation(AddNote)
  const [addSource] = useMutation(AddSource)
  const [createSource] = useMutation(CreateSource)

  const history = useHistory()

  return (value: string) => {
    const [command, first, second] = value.split('/')

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
      case 'cn':
        createNote({ variables: { name: first } })
        break
      case 'an':
        addNote({ variables: { from: first, to: second } })
        break
      case 'as':
        addSource({ variables: { from: first, to: second } })
        break
      case 'cs':
        createSource({ variables: { link: first } })
        break
      case 'set':
        history.push(`/set/${first}`)
        break

      default:
        console.log('Wrong command')
        break
    }
  }
}
