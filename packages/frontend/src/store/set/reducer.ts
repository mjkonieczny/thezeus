import { SEARCH_SET, SearchSetAction } from './types'
import { createReducer } from '../utilities'

export type SetState = {
  setName: string;
}

const initialState: SetState = {
  setName: '',
}

const searchSet = (
  state: SetState,
  {
    payload: {
      setName,
    },
  }: SearchSetAction,
): SetState => ({
  ...state,
  setName,
})

export default createReducer(initialState, {
  [SEARCH_SET]: searchSet,
})
