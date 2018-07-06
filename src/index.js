require('antd/dist/antd.min.css');
import { AppRegistry } from './AppRegistry';
import Tinker from './lib/tinker/src/index';
Tinker.engine = fetch.bind(window);
Tinker.isSuccess = result => result.status === 200;
// Tinker.isFailure = result => result.status !== 200;

Tinker.config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    "Accept": "application/json",
  },
  credentials: 'include',
}
AppRegistry();
