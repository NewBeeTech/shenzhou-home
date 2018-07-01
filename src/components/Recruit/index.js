import './style.css';
import React, { Component } from 'react';

class Recruit extends Component {
  showRecruitList(data) {
    const views = [];
    if(data) {
      data.map((item, key) => {
        views.push(
          <div key={key}>
              <div className="Recruit-top">{item.title}</div>
              <div className="Recruit-body">
                <div className="Recruit-body-left">
                    <div className="Recruit-body-title">岗位职责</div>
                    <pre className="Recruit-body-content">{item.responsibility}</pre>
                </div>

                <div className="Recruit-body-right">
                  <div className="Recruit-body-title">岗位要求</div>
                  <pre className="Recruit-body-content">{item.requirement}</pre>
                </div>
              </div>
          </div>
        )
      })
    }
    return views;
  }
  render() {
    return (
      <div className="Recruit-card">
        <div className="Recruit-title">
          <span className="Title-text">
            公司长期招聘以下人员
          </span>
        </div>
        {this.showRecruitList(this.props.data)}
        <div className="Recruit-bottom">请有意应聘者将个人简历、毕业证、学位证、身份证等相关证件、材料发送至指定邮箱， 符合条件者，我们会尽快与您联系，所有应聘资料将录入公司人才库。</div>
      </div>
    );
  }
}

export default Recruit;
