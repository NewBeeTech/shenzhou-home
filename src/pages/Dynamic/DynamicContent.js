import React, { Component } from 'react';
import { data } from './DynamicData'
import left from '../../assets/images/dynamic-date-left.svg';
import right from '../../assets/images/dynamic-date-right.svg';
import moreData from '../../assets/images/dynamic-info-more.svg';
import PageConent from '../../components/PageConent';


class DynamicContent extends Component {
  showDynamicList(data) {
    const views = [];
    if(data) {
      data.map((item, key) => {
        views.push(
          <div key={key} className="dynamic-item">
             <div className="dynamic-item-date">四月<br/><span>28</span></div>
             <div className="dynamic-item-content">
                <div className="dynamic-item-title">{item.title}</div>
                <div className="dynamic-item-info">{item.content}</div>
                <div className="dynamic-item-more">查看更多<img src={moreData} alt="" className="dynamic-item-more-img"/></div>
             </div>
             <div className="dynamic-item-img"><img src={''} alt="" /></div>
          </div>
        )
      })
    }
    return views;
  }
  render() {
    return (
      <div>
          <div className="date-header">
             <div className="date-header-left"><img src={left} alt="" className="date-header-left"/></div>
             <div>2018</div>
             <div className="date-header-right"><img src={right} alt="" className="date-header-right"/></div>
          </div>
          <div className="dynamic-content">
             {this.showDynamicList(data)}
          </div>
          <div className="dynamic-page">
            <PageConent 
               current={1}
               total={20}
               pageSize={10}
            />
          </div>
      </div>
    );
  }
}

export default DynamicContent;
