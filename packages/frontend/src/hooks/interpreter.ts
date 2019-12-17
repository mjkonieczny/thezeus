import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const CREATE_VERTEX = gql`
  mutation CreateVertex($name: String!) {
    CreateVertex(name: $name) {
      name
    }
  }
`

const CREATE_EDGE = gql`
  mutation CreateEdge($from: String!, $to: String!) {
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

const useInterpreter = (): (_: string) => void => {
  const [createVertex] = useMutation(CREATE_VERTEX)
  const [createEdge] = useMutation(CREATE_EDGE)

  return (value: string) => {
    const [command, first, second] = value.split(' ')

    switch (command) {
      case 'v':
        createVertex({ variables: { name: first } })
        break
      case 'e':
        createEdge({ variables: { from: first, to: second } })
        break

      default:
        console.log('Wrong command')
        break
    }
  }
}

export default useInterpreter
