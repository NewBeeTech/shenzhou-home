require('antd/dist/antd.min.css');
import { notification } from 'antd';
import { replace } from 'react-router-redux';
import { AppRegistry } from './AppRegistry';
import Tinker from './lib/tinker/src/index';
import { dispatch } from './store';
// import { detectIE } from './core/utils/ua';
// if (detectIE() && detectIE() <= 11) {
//   alert('请使用高版本浏览器');
// }
Tinker.engine = fetch.bind(window);
Tinker.isSuccess = result => result.code === '200';
Tinker.isFailure = result => result.code !== '200';

Tinker.config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  credentials: 'include',
}
AppRegistry();