import {
  SEARCH_SET,
  SearchSetAction,
} from './types'

export const searchSet = (setName: string): SearchSetAction => ({
  type: SEARCH_SET,
  payload: { setName },
})
