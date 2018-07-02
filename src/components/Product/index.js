import './style.css';
// import './animate.min.css';
// import './default.css';
import React, { Component } from 'react';

import { dispatch } from '../../store';
import { push } from 'react-router-redux';

import bgImg1 from '../../assets/images/basics-img1.svg';
import bgImg2 from '../../assets/images/basics-img2.svg';
import bgImg3 from '../../assets/images/basics-img3.svg';
import bgImg4 from '../../assets/images/basics-img4.svg';
import bgImg5 from '../../assets/images/basics-img5.svg';
import ProductImg1 from '../../assets/images/product1.svg';
import ProductImg2 from '../../assets/images/product2.svg';
// import ProductImg3 from '../../assets/images/product3.svg';
import ProductImg4 from '../../assets/images/product4.svg';
import ProductImg5 from '../../assets/images/product5.svg';
import ProductImg6 from '../../assets/images/product6.svg';

// {
//   title: 'MagicIST',
//   img: ProductImg3,
//   bgImg: bgImg3,
//   content: '一体化模拟仿真系统',
//   link: 'http://www.baidu.com',
// }, 

const list = [{
  id: 1,
  title: 'MagicST',
  img: ProductImg1,
  bgImg: bgImg1,
  subTitle: '电子沙盘推演系统',
  content: '电子沙盘推演系统集声、光、电于一体，可以逼真的显示作战区的地形、气象、交通等自然地理状况和军事设施、工事、兵力部署等重要军事目标，支持战场环境…',
  link: '/magic-st',
}, {
  id: 2,
  title: 'MagicWG',
  img: ProductImg2,
  bgImg: bgImg2,
  subTitle: '计算机兵棋推演系统',
  content: '兵棋是各方使用代表战场的棋盘和军事力量的棋子，依据从战争实战经验中总结出的规则，对作战过程进行对抗推演的工具。',
  link: '/magic-wg',
},{
  id: 3,
  title: '飞行模拟器',
  img: ProductImg4,
  bgImg: bgImg3,
  subTitle: '模拟训练装备',
  content: '旋转翼、固定翼、战术型、全任务型等， 能够进行战术模拟训练、飞行驾驶技术模拟训练、武器攻击模拟训练、战场环境模拟训练，具 有较高的逼真度。',
  link: '/analog-equipment',
}, {
  id: 4,
  title: '装甲车模拟器',
  img: ProductImg5,
  bgImg: bgImg4,
  subTitle: '模拟训练装备',
  content: '轮式装甲车模拟器由软件和硬件两部分构成，软件有驾驶训练、射击训练、指挥训练和编队战术训练四大功能。',
  link: '/analog-equipment',
}, {
  id: 5,
  title: '迫击炮模拟器',
  img: ProductImg6,
  bgImg: bgImg5,
  subTitle: '模拟训练装备',
  content: '轮式装甲车模拟器由软件和硬件两部分构成，软件有驾驶训练、射击训练、指挥训练和编队战术训练四大功能。',
  link: '/analog-equipment',
}]
class Product extends Component {
  state = {
    hoverState: false,
    id: ''
  }
  routeToDetails (url) {
    console.log(url);
    dispatch(push(url))
  }
  renderList () {
    const view = [];
    list.map((item, index) => {
      view.push(
        <div key={index} className="Product-item" 
            style={{backgroundImage: `url(${item.bgImg})`, backgroundSize: 'cover'}}
            onMouseEnter={() => {
              this.setState({ hoverState: true, id: item.id })
            }}
            onMouseLeave={() => {
              this.setState({ hoverState: false, id: '' })
            }}
        >
          <div key={index} className="Product-item-bg"  onClick={() => this.routeToDetails(item.link)}>
            <div className="Product-item-img">
              <img src={item.img} alt="arrow-right"/>
            </div>
            <div className="Product-item-title">{item.title}</div>
            <div className="Product-item-content">
              { this.state.hoverState && this.state.id === item.id ? item.content : item.subTitle}
            </div>
            <div className="Product-item-more">
              <div>查看详情</div>
            </div>
          </div>
        </div>
      )
      return item;
    })
    return view;
  }
  render() {
    return (
      <div className="Product">
        {this.renderList()}
      </div>
    );
  }
}

export default Product;
