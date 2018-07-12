import {GET} from '../core/WS/WSHandler';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import { notification } from 'antd';

const leaveMsgURL = `http://${window.location.host}/api/user/leaveMsg`

export const LEAVE_MSG = 'LEAVE_MSG';
export const leaveMsg = (params: Object, callBack) => (dispatch) => {
  const result = GET(leaveMsgURL, params);
  result.then(data => {
    if (data.code == '200') {
      // message.info('提交成功')
      notification.success({
        message: '提交成功',
        description: '',
        duration: 2,
      });
      callBack()
    } else {
      notification.success({
        message: '提交失败',
        description: data.message,
        duration: 2,
      });
      // message.info(data.message)
    }
  }).catch((err) => {
    console.warn('网络请求失败 ', err);
  });
  AsyncFetchHandler(LEAVE_MSG, result, dispatch);
};

const dynamicListURL = `http://${window.location.host}/api/new/listNews`
// 获取公告列表
export const DYNAMIC_LIST = 'DYNAMIC_LIST';
export const dynamicList = (params: Object) => (dispatch) => {
  const result = GET(dynamicListURL, params);
  // result.then(data => {
  //   // console.log('data', data)
  //   // if (data.code == '200') {
       
  //   // }
  // }).catch((err) => {
  //   console.warn('网络请求失败 ', err);
  // });
  AsyncFetchHandler(DYNAMIC_LIST, result, dispatch);
};
