import {applyMiddleware, createStore} from 'redux'
import { Reducer } from './Cake/Reducer'
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';

const store = createStore(Reducer,composeWithDevTools(applyMiddleware(logger)))

export default store