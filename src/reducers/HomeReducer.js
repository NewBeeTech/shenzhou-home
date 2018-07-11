
import * as HomeAction from '../actions/HomeAction';
import axe from '../lib/axe/src/index';
const ActionHandler = axe.ActionHandler;
import Immutable from 'immutable';

const data = [{
  time: '2018-02-10',
  title: '再“战”军博会，华如科技“军事仿真+”产品全新亮相',
  img: '',
  content: '年7月2-4日，第四届军民融合技术博览会将在北京国家会议中心举办。此次展会，华如科技首次推出“军事仿真+”产品，以军事仿真系统和模型为核心，进一步与军事大数据、综合集成等仿真相关行业深度融合，形成“军事仿真”“军事仿真+大数据”“军事仿真+综合集成”三大展区。',
}, {
  time: '2018-03-10',
  title: '再“战”军博会，华如科技“军事仿真+”产品全新亮相',
  img: '',
  content: '第四届军民融合技术博览会将在北京国家会议中心举办。此次展会，华如科技首次推出“军事仿真+”产品，以军事仿真系统和模型为核心，进一步与军事大数据、综合集成等仿真相关行业深度融合，形成“军事仿真”“军事仿真+大数据”“军事仿真+综合集成”三大展区。',
}]

const defaultState =  Immutable.Map({
  // list: [{
  //   index: '01',
  //   id: 1,
  //   name: '题干',
  //   pic: '../../assets/images/project.svg',
  //   type: 2, // 0全部 1
  //   pre: '简书首页是用户进入简书后的默认页面，根据用户所关注的专题、作者，实时为用户推送最新的创作作品。除了有和用户兴趣最相关的作品推送以外，简书首页同时会为用户推荐热门的专题、创作者，帮助用户发现新的热门专题。',
  //   year: '2017',
  //   month: '11'
  // }, {
  //   index: '02',
  //   id: 2,
  //   name: '题干',
  //   pic: '../../assets/images/project.svg',
  //   type: 3, // 0全部 1
  //   pre: '简书首页是用户进入简书后的默认页面，根据用户所关注的专题、作者，实时为用户推送最新的创作作品。除了有和用户兴趣最相关的作品推送以外，简书首页同时会为用户推荐热门的专题、创作者，帮助用户发现新的热门专题。',
  //   year: '2017',
  //   month: '11'
  // }]
  dynamicList: Immutable.Map({
    list: Immutable.fromJS(data),
    total: 3,
    pageNum: 1,
    pageSize: 2
  })
});


// const getProjectListHandler = new ActionHandler.handleAction(HomeAction.GET_PROJECTLIST);
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
