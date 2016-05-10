import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux'
import * as reducers from './reducers/';

export default (initialState = {}) => compose(
    applyMiddleware(thunk),
  )(createStore)(combineReducers({...reducers, routing: routerReducer}), initialState);
