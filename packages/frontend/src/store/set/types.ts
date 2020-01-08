import { Action } from '../types'

export const SEARCH_SET = 'SET/SEARCH_SET'

export type SearchSetAction = Action<{ setName: string }>
