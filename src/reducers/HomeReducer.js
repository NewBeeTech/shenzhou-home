
// import * as HomeAction from '../actions/HomeAction';
import axe from '../lib/axe/src/index';
const ActionHandler = axe.ActionHandler;

const defaultState = {
  list: [{
    index: '01',
    id: 1,
    name: '题干',
    pic: '../../assets/images/project.svg',
    type: 2, // 0全部 1
    pre: '简书首页是用户进入简书后的默认页面，根据用户所关注的专题、作者，实时为用户推送最新的创作作品。除了有和用户兴趣最相关的作品推送以外，简书首页同时会为用户推荐热门的专题、创作者，帮助用户发现新的热门专题。',
    year: '2017',
    month: '11'
  }, {
    index: '02',
    id: 2,
    name: '题干',
    pic: '../../assets/images/project.svg',
    type: 3, // 0全部 1
    pre: '简书首页是用户进入简书后的默认页面，根据用户所关注的专题、作者，实时为用户推送最新的创作作品。除了有和用户兴趣最相关的作品推送以外，简书首页同时会为用户推荐热门的专题、创作者，帮助用户发现新的热门专题。',
    year: '2017',
    month: '11'
  }]
};


// const getProjectListHandler = new ActionHandler.handleAction(HomeAction.GET_PROJECTLIST);

export default ActionHandler.handleActions(
  [],
  defaultState,
  /^HomeReducer\//
);
