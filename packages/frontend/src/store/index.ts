import {
  createStore, compose, combineReducers, Store,
} from 'redux'
import setReducer from './set/reducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default (): Store => {
  const reducer = combineReducers({
    set: setReducer,
  })

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reducer,
    {},
    composeEnhancers(),
  )
}
