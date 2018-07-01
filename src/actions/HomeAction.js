import Tinker from '../lib/tinker/src/index';
import reduxTinker from '../lib/tinker/src/reduxTinker';
import { dispatch } from '../store';
import { message } from 'antd';

export const LEAVE_MSG = 'LEAVE_MSG';
export const leaveMsg = (params) => {
  console.log('params:', params)
  const fetchHandler = new Tinker(
    `${APIURL}user/leaveMsg`,
    {
      method: 'GET',
    },
    params,
  ).success(result => {
    message.info('提交成功')
  });;
  reduxTinker(fetchHandler, LEAVE_MSG, dispatch).start();
};
