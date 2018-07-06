import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import Carousel from '../../components/Carousel'
import { projectData, data } from './MagicIETMData';

import topImg from '../../assets/images/magic-IETM-bg.png';
import magicImg from '../../assets/images/magic-IETM-img1.png';

class MagicIETM extends Component {
  showDataList (data) {
    const views = [];
    if(data) {
      const lengthNum = data.length;
      data.map((item, key) => {
        views.push(
          <div key={key} className="magic-IETM-item">
            <div className="magic-IETM-title"><div>{item.title}</div></div>
            <div className="magic-IETM-content">{item.content}</div>
          </div>
        )
        if (lengthNum !== key + 1 ) {
          views.push(<div className="magic-IETM-item-line"/>)
        }
      })
    }
    return views;
  }
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="basics" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="MagicIETM交互式电子手册平台" subTitle="MAGICIETM INTERACTIVE ELECTRONIC TECHNICAL MANUAL PLATFORM" />
          <ProductIntroduction 
            title="产品简介" 
            content={
              ['MagicIETM是一款我公司潜心研发的高效的交互式电子手册编辑平台。传统的设备使用手册、培训手册和维修手册等多以纸介质为主，不能满足实际需要。集数字化技术、因特网技术和人工智能技术于一体的通用交互式电子手册可以大大提高设备手册使用效率，并可与测试、虚拟维修、虚拟训练平台直接相连，成为目前发展方向。']}
          />

           <div className="magic-IETM-composition">
              {this.showDataList(data)}
           </div>

          <div className="magic-IETM-composition-img">
              <img src={magicImg} alt="" />
              <div>MagicIETM流程图</div>
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

          <div className="magic-st-technical" />
           
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default MagicIETM;
