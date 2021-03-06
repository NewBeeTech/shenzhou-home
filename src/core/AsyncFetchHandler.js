/**
 * Happy Hacking
 * Created by leiyouwho on 3/5/2016.
 */

import * as FetchState from './FetchState';


const AsyncFetchHandler = (
  actionName: string,
  fetchResultPromise: Promise,
  dispatch: Function,
  sideEffect = (data) => data,
) => {
  dispatch({
    type: FetchState.REQUEST(actionName),
  });
  fetchResultPromise
    .then(data => {
      console.log('data.code:', data.code)
      if (data.code == '200') {
        dispatch({
          type: FetchState.SUCCESS(actionName),
          data: sideEffect(data.data),
        });
      } else {
        dispatch({
          type: FetchState.FAILURE(actionName),
          errMsg: data.message,
        });
      }
    })
    .catch(err => {
      console.warn(err);
      dispatch({
        type: FetchState.FAILURE(actionName),
        errMsg: err.message,
      });
    });
};

export default AsyncFetchHandler;
