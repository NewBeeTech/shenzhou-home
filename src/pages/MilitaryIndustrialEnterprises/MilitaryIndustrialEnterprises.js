import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import Carousel from '../../components/Carousel'
import { projectData, compositionData } from './MilitaryIndustrialEnterprisesData';

import topImg from '../../assets/images/military-industrial-enterprises-bg.png';

class MilitaryIndustrialEnterprises extends Component {
  showData(data) {
    const views = [];
    if(data) {
      data.map((item, key) => {
        views.push(
          <div className="military-industrial-enterprises-right-item">
              <div className="military-industrial-enterprises-img"><img src={item.img} alt=""/></div>
              <div className="military-industrial-enterprises-right">
                <div className="military-industrial-enterprises-right-title">{item.title}</div>
                <div className="military-industrial-enterprises-right-content">{item.content}</div> 
              </div>
          </div>
        )
      })
    }
    return views;
  }
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="contact" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="军工企业案例" subTitle="MILITARY ENTERPRISE CASE" />
          <ProductIntroduction 
            title="产品简介" 
            content={
              ['公司致力于为军工企业提供软件平台产品和应用开发服务。基于分布式仿真平台MAXSim、虚拟仿真平台MagicBook、交互式电子手册MagiclETM、虚拟场景系统MagicScene等平台，为多家军工企业产品前期论证、产品设计、产品操作训练、产品维修保障的全流程提供多方面服务，完成了多个成功案例。']}
          />

          <div className="military-industrial-enterprises-content">
            {this.showData(compositionData)}
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

export default MilitaryIndustrialEnterprises;
