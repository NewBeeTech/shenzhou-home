
import * as HomeAction from '../actions/HomeAction';
import axe from '../lib/axe/src/index';
const ActionHandler = axe.ActionHandler;
import Immutable from 'immutable';

// const data = [{
//   img:"http://shenzhoukeji.oss-cn-beijing.aliyuncs.com/pic/3nX5Kt-WechatIMG1877.jpeg",
//   createTime:"2018-07-12 17:07:26",
//   updateTime:"2018-07-12 17:17:38",
//   id:6,
//   title:"啦啦啦ff",
//   content:"[{\"type\":1,\"content\":\"这种方案，可以方便的提交复杂的结构化数据，特别适合 RESTful 的接口。各大抓包工具如 Chrome 自带的开发者工具、Firebug、Fiddler，都会以树形结构展示 JSON 数据，非常友好。但也有些服务端语言还没有支持这种方式，例如 php 就无法通过 $_POST 对象从上面的请求中获得内容。这时候，需要自己动手处理下：在请求头中 Content-Type 为 application/json 时，从 php://input 里获得原始输入流，再 json_decode 成对象。一些 php 框架已经开始这么做了。\"},{\"type\":3,\"content\":\"http://shenzhoukeji.oss-cn-beijing.aliyuncs.com/pic/zstY36-WechatIMG1877.jpeg\"},{\"type\":1,\"content\":\"这种方案，可以方便的提交复杂的结构化数据，特别适合 RESTful 的接口。各大抓包工具如 Chrome 自带的开发者工具、Firebug、Fiddler，都会以树形结构展示 JSON 数据，非常友好。但也有些服务端语言还没有支持这种方式，例如 php 就无法通过 $_POST 对象从上面的请求中获得内容。这时候，需要自己动手处理下：在请求头中 Content-Type 为 application/json 时，从 php://input 里获得原始输入流，再 json_decode 成对象。一些 php 框架已经开始这么做了。\"}]"
//  },{
//    img:"http://shenzhoukeji.oss-cn-beijing.aliyuncs.com/pic/cAcFn3-WechatIMG1877.jpeg",
//    createTime:"2018-07-12 16:59:58",
//    updateTime:"2018-07-12 16:59:58",
//    id:5,
//    title:"测试公告",
//    content:"[{\"type\":1,\"content\":\"niii\"}]"
//   }]

const defaultState =  Immutable.Map({
  dynamicList: Immutable.Map({
    list: Immutable.List([]),
    total: 0,
    pageNum: 1,
    pageSize: 10
  })
});

const getDynamicListHandler = new ActionHandler.handleAction(HomeAction.DYNAMIC_LIST)
  .success((state, action) => {
    return state.setIn(['dynamicList', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['dynamicList', 'total'], Immutable.fromJS(action.data.total))
      .setIn(['dynamicList', 'pageNum'], Immutable.fromJS(action.data.pageNum))
      .set('isFetching', false).set('errMsg', '');
  });

export default ActionHandler.handleActions(
  [getDynamicListHandler],
  defaultState,
  /^HomeReducer\//
);

