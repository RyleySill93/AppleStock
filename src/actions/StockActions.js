export const RECEIVE_STOCK_DATA = 'RECEIVE_STOCK_DATA';
import { getStockData } from '../util/stockApiUtil';
import { receiveLoadingState } from './loadingActions';

export const receiveStockData = (stockData) => ({
  action: RECEIVE_STOCK_DATA,
  stockData
});

export const requestStockData = () => (dispatch) => {
  dispatch(receiveLoadingState(true));
  return getStockData().then(res => {
    dispatch(receiveLoadingState(false));
    dispatch(receiveStockData(res.data.query.results.quote));
  });
};
