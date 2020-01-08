import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { useDispatch } from 'react-redux'
import { searchSet } from '../store/set/actions'

const CREATE_SET = gql`
  mutation CreateSet($name: String!) {
    CreateSet(name: $name) {
      name
    }
  }
`

const DELETE_SET = gql`
  mutation DeleteSet($name: String!) {
    DeleteSet(name: $name) {
      name
    }
  }
`

const ADD_SUBSET = gql`
  mutation AddSubset($from: String!, $to: String!) {
    AddSetSubsets(from: { name: $from }, to: { name: $to }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`

const REMOVE_SUBSET = gql`
  mutation RemoveSubset($from: String!, $to: String!) {
    RemoveSetSubsets(from: { name: $from }, to: { name: $to }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`

const useInterpreter = (): (_: string) => void => {
  const [createSet] = useMutation(CREATE_SET)
  const [deleteSet] = useMutation(DELETE_SET)
  const [addSubset] = useMutation(ADD_SUBSET)
  const [removeSubset] = useMutation(REMOVE_SUBSET)

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
