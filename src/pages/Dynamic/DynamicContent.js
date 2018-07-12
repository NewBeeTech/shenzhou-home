import React, { Component } from 'react';
import { Modal } from 'antd'
// import left from '../../assets/images/dynamic-date-left.svg';
// import right from '../../assets/images/dynamic-date-right.svg';
import moreData from '../../assets/images/dynamic-info-more.svg';
import PageConent from '../../components/PageConent';
import moment from 'moment';
import { dispatch } from '../../store';
import * as HomeAction from '../../actions/HomeAction';
import topImg from '../../assets/images/dynamic-bg.png';



class DynamicContent extends Component {
  state = {
    info: null,
    visible: false
  }
  componentWillMount() {
    dispatch(HomeAction.dynamicList({ pageNum: 1, pageSize: 10 }))
  }
  _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
    const localParams = { pageNum: current, pageSize: this.props.dynamicList.get('pageSize') }
    console.log(localParams)
    dispatch(HomeAction.dynamicList(localParams))
  };
  getContent(content) {
    let value = '';
    if (content) {
      value = JSON.parse(content)[0].content
    }
    return value;
  }
  showDynamicList(data) {
    const views = [];
    if(data) {
      data.map((item, key) => {
        views.push(
          <div key={key} className="dynamic-item">
             <div className="dynamic-item-date">{moment(item.get('time')).format('YYYY-MM')}<br/><span>{moment(item.get('time')).format('DD')}</span></div>
             <div className="dynamic-item-content">
                <div className="dynamic-item-title">{item.get('title')}</div>
                <div className="dynamic-item-info">{this.getContent(item.get('content'))}</div>
                <div className="dynamic-item-more"
                  onClick={() => {
                      this.setState({
                        visible: true,
                        info: item.toJS()
                      })
                  }}
                >查看更多<img src={moreData} alt="" className="dynamic-item-more-img"/></div>
             </div>
             <div className="dynamic-item-img"><img src={item.get('img')} alt="" /></div>
          </div>
        )
      })
    }
    return views;
  }
  showContent(data) {
    console.log(data)
    const views = [];
    if (data) {
      JSON.parse(data).map((item, key) => {
         if(item.type === 1) {
          views.push(<div className="dynamic-modal-info" key={key}>{item.content}</div>)
         } else if(item.type === 3) {
          views.push(<div className="modal-content-img" key={key}><img src={item.content} /></div>)
         }
      }) 
    }
    return views;
  }
  render() {
    return (
      <div>
          {/* <div className="date-header">
             <div className="date-header-left"><img src={left} alt="" className="date-header-left"/></div>
             <div>2018</div>
             <div className="date-header-right"><img src={right} alt="" className="date-header-right"/></div>
          </div> */}
          <div className="dynamic-content">
             {this.showDynamicList(this.props.dynamicList.get('list'))}
          </div>
          <div className="dynamic-page">
            <PageConent 
               current={this.props.dynamicList.get('pageNum')}
               total={this.props.dynamicList.get('total')}
               pageSize={this.props.dynamicList.get('pageSize')}
               searchAction={this._searchAction(this.props.dispatch)}
            />
          </div>
          <Modal
            title={<div className="modal-title">公告详情</div>}
            closable={true}
            maskClosable={true}
            visible={this.state.visible}
            onCancel={() => {
              this.setState({ visible: false })
            }}
            footer={null}
            width={'70vw'}
            style={{ top: 10 }}
          >
              <div className="modal-content">
                <div className="dynamic-modal-title">{this.state.info && this.state.info.title}</div>
                <div className="modal-content-info">
                  {console.log(this.state.info)}
                  {this.showContent(this.state.info && this.state.info.content)}
                </div>
              </div>     
          </Modal>
      </div>
    );
  }
}

export default DynamicContent;
