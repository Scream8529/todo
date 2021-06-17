import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './appReducer'
import authReducer from './authReducer'

const reducers = combineReducers({
    auth: authReducer,
    app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store