import { routerReducer } from 'react-router-redux';
import * as rrr from 'react-router-redux';
import { combineReducers } from 'redux';

// 引入各reducers
import HomeReducer from './HomeReducer';

// 状态入口
const appReducers = combineReducers({
  routing: routerReducer,
  HomeReducer,
});

export default appReducers;
