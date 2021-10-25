import {createStore, applyMiddleware} from 'redux'
import {persistReducers} from './reducers'
import thunk from 'redux-thunk'
import persistStore from 'redux-persist/es/persistStore'

export const store = createStore(persistReducers, {}, applyMiddleware(thunk))
export const persistedStore = persistStore(store)
