import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const CREATE_VERTEX = gql`
  mutation CreateVertex($name: String!) {
    CreateVertex(name: $name) {
      name
    }
  }
`

const DELETE_VERTEX = gql`
  mutation DeleteVertex($name: String!) {
    DeleteVertex(name: $name) {
      name
    }
  }
`

const ADD_EDGE = gql`
  mutation AddEdge($from: String!, $to: String!) {
    AddVertexAdjacents(from: { name: $from }, to: { name: $to }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`

const REMOVE_EDGE = gql`
  mutation RemoveEdge($from: String!, $to: String!) {
    RemoveVertexAdjacents(from: { name: $from }, to: { name: $to }) {
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
  const [createVertex] = useMutation(CREATE_VERTEX)
  const [deleteVertex] = useMutation(DELETE_VERTEX)
  const [addEdge] = useMutation(ADD_EDGE)
  const [removeEdge] = useMutation(REMOVE_EDGE)

  return (value: string) => {
    const [command, first, second] = value.split(' ')

    switch (command) {
      case 'cv':
        createVertex({ variables: { name: first } })
        break
      case 'dv':
        deleteVertex({ variables: { name: first } })
        break
      case 'ae':
        addEdge({ variables: { from: first, to: second } })
        break
      case 're':
        removeEdge({ variables: { from: first, to: second } })
        break

      default:
        console.log('Wrong command')
        break
    }
  }
}

export default useInterpreter
