import Tinker from '../lib/tinker/src/index';
import reduxTinker from '../lib/tinker/src/reduxTinker';
import { dispatch } from '../store';
import { message } from 'antd';
import * as URL from '../core/WS/URL';

// 提交技术支持
export const LEAVE_MSG = 'LEAVE_MSG';
export const leaveMsg = (params) => {
  const tinker = new Tinker(
    URL.leaveMsgPath,
    {
      method: 'POST',
    },
    params,
  );
  tinker
  .success(() => {
    message.info('提交成功'); 
  })
  .failure(() => {
    message.info(`${result.message}`);
  })
  reduxTinker(tinker, LEAVE_MSG, dispatch).start();
}
