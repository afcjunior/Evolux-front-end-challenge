import { applyMiddleware } from  'redux' //compose is for reduxDevtools
import thunk from 'redux-thunk'
import logger from './logger'

export default applyMiddleware(thunk, logger)