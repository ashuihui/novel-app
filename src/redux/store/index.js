
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise';

const store = createStore(rootReducer, applyMiddleware(thunk,promiseMiddleware,logger));

export default store
