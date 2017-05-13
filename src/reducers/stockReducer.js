import { RECEIVE_STOCK_DATA } from '../actions/stockActions';
import merge from 'lodash/merge';

const stockReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_STOCK_DATA:
      return action.stockData;
    default:
      return state;
  }
};

export default stockReducer;
