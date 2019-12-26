import { Action } from '../types'

export const SEARCH_VERTEX = 'VERTEX/SEARCH_VERTEX'

export type SearchVertexAction = Action<{ vertex: string }>
