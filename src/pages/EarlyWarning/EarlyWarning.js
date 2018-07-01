import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import Characteristics from '../../components/Characteristics'
import Carousel from '../../components/Carousel'
import { projectData, compositionData } from './EarlyWarningData';

import topImg from '../../assets/images/early-warning-bg.png';
import magicImg from '../../assets/images/early-warning-img1.png';

class EarlyWarning extends Component {
  showDataList (data) {
    const views = [];
    if(data) {
      data.map((item, key) => {
        views.push(
          <div key={key} className="max-sim-system-item">
            <div className="max-sim-system-title">
              <div className="army-system-red-div"/>
              <div>{item.title}</div>
            </div>
            <div className="max-sim-system-content">{item.content}</div>
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
          <TopImgForMagic topImg={topImg} title="预警指挥平台模拟训练系统" subTitle="EARLY WARNING AND COMMAND SIMULATION TRAINING SYSTEM" />
          <ProductIntroduction 
            title="产品简介" 
            content={
              [' 预警指挥系统主要是为建立综合导控系统，实现改进后的X型任务系统训练模拟器和Y型警戒机任务系统训练模拟器与虚拟兵力推演系统互联，并在综合导控系统的组织与控制下实现海军预警战术联网对抗训练功能。']}
          />
         

          <div className="magic-st-system-composition">
            <ProductIntroduction 
              title="系统组成" 
              content={
                ['本系统包括综合导演台、系统监控台、数据管理台、环境仿真台/二维态势显示台、红方导演台、蓝方导演台、三维态势显示台，可实现不同的战术对抗训练模式。']}
            />

             <div className="max-sim-system-body army-system-body">
                <div className="early-warning-img">
                  <img src={magicImg} alt="" />
                </div>
                {this.showDataList(compositionData)}
             </div>

             
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

           <div className="magic-wg-technical">
            <CommonTitle title="技术特点" />
            <div className="helicopter-system-technical-content">
              <div><Characteristics num="01" content="基于MAXSim的模拟器接入仿真推演，实现了多台任务系统训练模拟器接入仿真推演，采用虚实结合的推演方法，使得推演真实性更强。"/></div>
              <div><Characteristics num="02" content="采用软件产品系列化设计开发，最大限度的实现了软件模块的重用。"/></div>
              <div><Characteristics num="03" content="应用软件实现源代码级的兼容和互操作性，并可根据硬件系统的配置调整系统参数和功能，易于系统升级。"/></div>
            </div>
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default EarlyWarning;
