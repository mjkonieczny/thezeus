import {
  SEARCH_VERTEX,
  SearchVertexAction,
} from './types'

export const searchVertex = (vertex: string): SearchVertexAction => ({
  type: SEARCH_VERTEX,
  payload: { vertex },
})
