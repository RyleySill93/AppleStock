import * as types from '../constants/actionTypes';
import { combineReducers } from 'redux';
import stockReducer from './stockReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  stock: stockReducer,
  loading: loadingReducer
});
