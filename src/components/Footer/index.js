import './style.css';
import React, { Component } from 'react';
import bgImg from '../../assets/images/footer-bg.png';
import mail from '../../assets/images/mail.svg';
import mobile from '../../assets/images/mobile.svg';
import address from '../../assets/images/address.svg';
import logo from '../../assets/images/footer-logo.svg';

const leftList = [{
  icon: mobile,
  content: '010-88437188',
}, {
  icon: address,
  content: '北京市海淀区中关村军民融合产业园B座一层',
}, {
  icon: mail,
  content: 'info@maficode.com',
}]
const rightList1 = [
  { content: '企业文化', url: '/corporate-culture' },
  { content: '技术支持', url: '/technical-support' },
  { content: '关于我们', url: '/dynamic' },
  { content: '加入我们', url: '/join-us' }
]
const rightList2 = [
  { content: 'MAXSim', url: '/max-sim' },
  { content: 'MagicBook', url: '/magic-book' },
  { content: 'MagicIETM', url: '/magic-IETM' }
]
const rightList3 = [
  { content: 'MagicST', url: '/magic-st' },
  { content: 'MagicWG', url: '/magic-wg' },
  { content: '飞行模拟器', url: '' },
  { content: '装甲车模拟器', url: '' },
  { content: '炮兵模拟器', url: '' },
  { content: '职业教育在线课程', url: '' },
]
const rightList4 = [
  { content: '陆军航空兵战术对抗训练模拟系统', url: '' },
  { content: '直升机控制停车特情处理模拟训练', url: '/helicopter-system' },
  { content: '坦克机动车战协同虚拟训练', url: '/tank-system' },
  { content: '水面舰艇损管虚拟训练系统', url: '/naval-vessels' },
  { content: '空军作战指挥训练仿真系统', url: '/simulation-system' },
  { content: '全部案例', url: '' }
]
class Footer extends Component {
  showAll () {
    console.log('查看全部');
  }
  renderLeftList () {
    const view = [];
    leftList.map((item, index) => {
      view.push(
        <div key={index} className="Footer-left-item">
          <img src={item.icon} alt="Footer-left-icon" />
          <div className="Footer-left-content">{item.content}</div>
        </div>
      )
      return item;
    })
    return view;
  }
  renderRightList (list) {
    const view = [];
    list.map((item, index) => {
      view.push(
        <a key={index} className="Footer-right-child-item"
          href={item.url}
        >{item.content}</a>
      )
      return item;
    })
    return view;
  }
  render() {
    return (
      <div className="Footer" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover'}}>
        <a name={this.props.name} id={this.props.name}> </a>
        <div className="Footer-left">
          <img className="Footer-left-logo" src={logo} alt="logo" />
          <div className="Footer-left-bottom">
            {this.renderLeftList()}
          </div>
        </div>
        <div className="Footer-middle">
        </div>
        <div className="Footer-right">
          <div className="Footer-right-item">
            <span>关于</span>
            <div className="Footer-right-list">
              {this.renderRightList(rightList1)}
            </div>
          </div>
          <div className="Footer-right-item">
            <span>核心平台</span>
            <div className="Footer-right-list">
              {this.renderRightList(rightList2)}
            </div>
          </div>
          <div className="Footer-right-item">
            <span>主要产品</span>
            <div className="Footer-right-list">
              {this.renderRightList(rightList3)}
            </div>
          </div>
          <div className="Footer-right-item">
            <span>成功案例</span>
            <div className="Footer-right-list">
              {this.renderRightList(rightList4)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
