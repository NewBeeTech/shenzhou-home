import {GET} from '../core/WS/WSHandler';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import { message } from 'antd';

const APIURL = `http://${window.location.host}/api/user/leaveMsg`

export const LEAVE_MSG = 'LEAVE_MSG';
export const leaveMsg = (params: Object, callBack) => (dispatch) => {
  const result = GET(APIURL, params);
  console.log('result', result)
  AsyncFetchHandler(LEAVE_MSG, result, dispatch);
  result.then(data => {
    if (data.code == '200') {
      message.info('提交成功')
      callBack()
    } else {
      message.info(data.message)
    }
  }).catch((err) => {
    console.warn('网络请求失败 ', err);
  });

};
