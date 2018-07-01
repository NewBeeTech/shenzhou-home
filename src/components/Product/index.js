import './style.css';
// import './animate.min.css';
// import './default.css';
import React, { Component } from 'react';
import bgImg1 from '../../assets/images/basics-img1.svg';
import bgImg2 from '../../assets/images/basics-img2.svg';
import bgImg3 from '../../assets/images/basics-img3.svg';
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
  title: 'MagicST',
  img: ProductImg1,
  bgImg: bgImg1,
  content: '电子沙盘推演系统',
  link: 'http://www.baidu.com',
}, {
  title: 'MagicWG',
  img: ProductImg2,
  bgImg: bgImg2,
  content: '计算机兵棋推演系统',
  link: 'http://www.baidu.com',
},{
  title: '飞行模拟器',
  img: ProductImg4,
  bgImg: bgImg1,
  content: '旋转翼、固定翼、战术型、全任务型等， 能够进行战术模拟训练、飞行驾驶技术模拟训练、武器攻击模拟训练、战场环境模拟训练，具 有较高的逼真度。',
  link: 'http://www.baidu.com',
}, {
  title: '装甲车模拟器',
  img: ProductImg5,
  bgImg: bgImg2,
  content: '模拟训练装备',
  link: 'http://www.baidu.com',
}, {
  title: '迫击炮模拟器',
  img: ProductImg6,
  bgImg: bgImg3,
  content: '模拟训练装备',
  link: 'http://www.baidu.com',
}]
class Product extends Component {
  routeToDetails (url) {
    console.log(url);
  }
  renderList () {
    const view = [];
    list.map((item, index) => {
      view.push(
        <div key={index} className="Product-item" style={{backgroundImage: `url(${item.bgImg})`, backgroundSize: 'cover'}}>
          <div key={index} className="Product-item-bg"  onClick={() => this.routeToDetails(item.link)}>
            <div className="Product-item-img"><img src={item.img} alt="arrow-right"/></div>
            <div className="Product-item-title">{item.title}</div>
            <div className="Product-item-content">
              {item.content}
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
