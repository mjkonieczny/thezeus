import { createStore, compose, combineReducers } from 'redux'
import vertexReducer from './vertex/reducer'

export default (): any => {
  const reducer = combineReducers({
    vertex: vertexReducer,
  })

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reducer,
    {},
    composeEnhancers(),
  )
}
