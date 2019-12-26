import { SEARCH_VERTEX, SearchVertexAction } from './types'
import { createReducer } from '../utilities'

export type VertexState = {
  vertex: string;
}

const a: VertexState = {
  vertex: '',
}

const searchVertex = (
  state: VertexState,
  {
    payload: {
      vertex,
    },
  }: SearchVertexAction,
): VertexState => ({
  ...state,
  vertex,
})

export default createReducer(a, {
  [SEARCH_VERTEX]: searchVertex,
})
