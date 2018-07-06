import {GET} from '../core/WS/WSHandler';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import { notification } from 'antd';

const APIURL = `http://${window.location.host}/api/user/leaveMsg`

export const LEAVE_MSG = 'LEAVE_MSG';
export const leaveMsg = (params: Object, callBack) => (dispatch) => {
  const result = GET(APIURL, params);
  result.then(data => {
    if (data.code == '200') {
      // message.info('提交成功')
      notification.success({
        message: '提交成功',
        description: '',
      });
      callBack()
    } else {
      notification.success({
        message: '提交成功',
        description: data.message,
      });
      // message.info(data.message)
    }
  }).catch((err) => {
    console.warn('网络请求失败 ', err);
  });
  AsyncFetchHandler(LEAVE_MSG, result, dispatch);
};
