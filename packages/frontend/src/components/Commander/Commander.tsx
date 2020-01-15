import React, {
  SFC, useState, ChangeEvent, FormEvent,
} from 'react'
import { useInterpreter } from '../../hooks'

import styles from './commander.module.scss'

const Commander: SFC = () => {
  const [value, setValue] = useState('')
  const interpreter = useInterpreter()

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value)

  const onSubmit = (event: FormEvent): void => {
    event.preventDefault()
    interpreter(value)
    setValue('')
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
    </form>
  )
}

export default Commander
