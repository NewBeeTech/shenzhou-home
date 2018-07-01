import './style.css';
import React, { Component } from 'react';
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
  content: '陆军航空兵战术对抗模拟训练系统',
  icon: ResolveImg1,
  hoverIcon: ResolveImg2,
}, {
  content: '直升机中停车特情处置虚拟训练',
  icon: ResolveImg2,
  hoverIcon: bgImg,
}, {
  content: '坦克机动作战协同虚拟训练',
  icon: ResolveImg3,
  hoverIcon: bgImg,
}, {
  content: '新型编制单元作战能效仿真系统',
  icon: ResolveImg4,
  hoverIcon: bgImg,
}, {
  content: '海军预警指挥平台模拟训练系统',
  icon: ResolveImg5,
  hoverIcon: bgImg,
}, {
  content: '水面舰艇损害虚拟训练系统',
  icon: ResolveImg6,
  hoverIcon: bgImg,
}, {
  content: '海军训练信息系统仿真平台',
  icon: ResolveImg7,
  hoverIcon: bgImg,
}, {
  content: '海军潜艇作战推演系统',
  icon: ResolveImg8,
  hoverIcon: bgImg,
}]
class Resolve extends Component {
  showAll () {
    console.log('查看全部');
  }
  renderList () {
    const view = [];
    list.map((item, index) => {
      view.push(
        <div key={index} className="Resolve-item" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover'}}>
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
        <div onClick={() => this.showAll()}className="Resolve-all">
          查看全部
        </div>
      </div>
    );
  }
}

export default Resolve;
