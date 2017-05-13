export const RECEIVE_STOCK_DATA = 'RECEIVE_STOCK_DATA';
import { getStockData } from '../util/stockApiUtil';

export const receiveStockData = (stockData) => ({
  action: RECEIVE_STOCK_DATA,
  stockData
});

export const requestStockData = () => (dispatch) => {
  return getStockData().then(res => {
    dispatch(receiveStockData(res.data.query.results.quote));
  });
};
