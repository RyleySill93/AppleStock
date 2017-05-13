import * as types from '../constants/actionTypes';
import { combineReducers } from 'redux';
import stockReducer from './stockReducer';

export default combineReducers({
  stock: stockReducer
});
