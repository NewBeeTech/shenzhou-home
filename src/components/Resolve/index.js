import './style.css';
import React, { Component } from 'react';
import { dispatch } from '../../store';
import { push } from 'react-router-redux';
import bgImg from '../../assets/images/resolve-bg.svg';
import ResolveImg1 from '../../assets/images/resolve1.svg';
import ResolveImg2 from '../../assets/images/resolve2.svg';
import ResolveImg3 from '../../assets/images/resolve3.svg';
import ResolveImg4 from '../../assets/images/resolve4.svg';
import ResolveImg5 from '../../assets/images/resolve5.svg';
import ResolveImg6 from '../../assets/images/resolve6.svg';
import ResolveImg7 from '../../assets/images/resolve7.svg';
import ResolveImg8 from '../../assets/images/resolve8.svg';

const list = [{
  
  content: '陆军兵种战术对抗训练模拟系统',
  icon: ResolveImg1,
  hoverIcon: ResolveImg2,
  url: '/army-system'
}, {
  content: '直升机特情处置虚拟训练系统',
  icon: ResolveImg2,
  hoverIcon: bgImg,
  url: '/helicopter-system'
}, {
  content: '坦克机动作战协同虚拟训练系统',
  icon: ResolveImg3,
  hoverIcon: bgImg,
  url: '/tank-system'
}, {
  content: '新型编制单元作战效能仿真系统',
  icon: ResolveImg4,
  hoverIcon: bgImg,
  url: '/simulation-system'
}, {
  content: '预警指挥平台模拟训练系统',
  icon: ResolveImg5,
  hoverIcon: bgImg,
  url: '/early-warning'
}, {
  content: '水面舰艇损管虚拟训练系统',
  icon: ResolveImg6,
  hoverIcon: bgImg,
  url: '/naval-vessels'
}, {
  content: '海军教练监控系统',
  icon: ResolveImg7,
  hoverIcon: bgImg,
  url: '/coach-monitoring'
}, {
  content: '海军潜艇作战推演系统',
  icon: ResolveImg8,
  hoverIcon: bgImg,
  url: '/submarine-system'
}]
class Resolve extends Component {
  showAll () {
    console.log('查看全部');
  }
  renderList () {
    const view = [];
    list.map((item, index) => {
      view.push(
        <div key={index} className="Resolve-item" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover'}}
           onClick={() => {
             dispatch(push(item.url))
           }}
        >
          <img className="Resolve-item-img" src={item.icon} alt="resolve-icon" />
          <div className="Resolve-item-content">{item.content}</div>
        </div>
      )
      return item;
    })
    return view;
  }
  render() {
    return (
      <div className="Resolve">
        <div className="Resolve-card">
          {this.renderList()}
        </div>
        {/* <div onClick={() => this.showAll()}className="Resolve-all">
          查看全部
        </div> */}
      </div>
    );
  }
}

export default Resolve;
