import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImg from '../../components/TopImg';
import Footer from '../../components/Footer';
import * as HomeAction from '../../actions/HomeAction';

import topImg from '../../assets/images/technical-support-img.png';

class TechnicalSupport extends Component {
  state = {
    name: '',
    title: '',
    email: '',
    desc: '',
  }
  render() {
    return (
      <div  className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="support" />
        </div>
        <div className="JoinUs-body">
          <TopImg topImg={topImg} title="技术支持" subTitle="Technical Support" />
          <div className="support-body">
            <div className="support-body-title">请留下您宝贵的意见或建议</div>
            <div className="inputDiv">
              <input
                  className="inputStyle"
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({ name: e.target.value })
                  }}
              />
              <div className="inputLeftText">姓名</div>
            </div>
            <div className="inputDiv">
              <input
                  className="inputStyle"
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({ email: e.target.value })
                  }}
              />
              <div className="inputLeftText">邮箱</div>
            </div>
            <div className="inputDiv">
              <input
                  className="inputStyle"
                  value={this.state.title}
                  onChange={(e) => {
                    this.setState({ title: e.target.value })
                  }}
              />
              <div className="inputLeftText">主题</div>
            </div>
            <div className="inputDiv">
              <textarea
                  className="textarea"
                  value={this.state.desc}
                  onChange={(e) => {
                    this.setState({ desc: e.target.value })
                  }}
              />
              <div className="inputLeftText">内容</div>
            </div>
            <div className="submit-button"
               onClick={() => {
                  const params = {
                    name: this.state.name,
                    title: this.state.title,
                    email: this.state.email,
                    desc: this.state.desc,
                  }
                  this.props.dispatch(HomeAction.leaveMsg(params))
               }}
            >确认提交</div>
          </div>
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default TechnicalSupport;
