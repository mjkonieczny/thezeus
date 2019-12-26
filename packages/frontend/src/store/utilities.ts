import { SimpleAction } from './types'

export const createReducer = <State, Action extends SimpleAction>(
  initialState: State,
  handlers: { [type: string]: (state: State, action: Action) => State },
) => (state = initialState, action: Action) => {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
