import React, { SFC, useState, KeyboardEvent, ChangeEvent, FormEvent } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const CREATE_VERTEX = gql`
  mutation CreateVertex($name: String!) {
    CreateVertex(name: $name) {
      name
    }
  }
`

const Commander: SFC = () => {
  const [value, setValue] = useState('')
  const [createVertex] = useMutation(CREATE_VERTEX)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    createVertex({ variables: { name: value } })
    setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
    </form>
  )
}

export default Commander
