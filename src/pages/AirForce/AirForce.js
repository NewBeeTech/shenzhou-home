import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import Characteristics from '../../components/Characteristics'
import Carousel from '../../components/Carousel'
import { projectData, compositionData } from './AirForceData';

import topImg from '../../assets/images/air-force-bg.png';
import magicImg1 from '../../assets/images/air-force-img1.png';
import magicImg2 from '../../assets/images/air-force-img2.png';

class AirForce extends Component {
  showCompositionData(data) {
    const views = [];
    if(data) {
      data.map((item, key) => {
        views.push(
          <div key={key} className="air-force-system-system-item">
            <div><img src={item.img} alt=""/></div>
            <div className="air-force-system-system-title">{item.title}</div>
          </div>
        );
      })
    }
    return views;
  }
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="resolve" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="空军作战指挥训练仿真系统" subTitle="AIR FORCE OPERATIONAL COMMAND AND TRAINING SIMULATION SYSTEM" />
          <ProductIntroduction 
            title="产品简介" 
            content={
              [' 本系统是基于MAXSim仿真平台开发的空军战役作战指挥训练仿真系统，它针对以指挥员为中心的指挥所整体性、精准性、关联性指挥训练的任务需求，可满足多方向、多想定、多层次的战役战术对抗训练需要，用于导演人员和施训人员的演练准备、演练情况与进程掌握、演练问题设置、指挥控制支撑、演练效果评估和分析。']}
          />
          <div className="magic-st-system-composition combat-platform-system-composition">
            <CommonTitle title="系统功能"/>
            <div className="air-force-system-system">
              {this.showCompositionData(compositionData)}
            </div>
            <div className="magic-IETM-composition-img">
              <img src={magicImg2} alt="" />
              <div>演练导控系统组成</div>
            </div>

            <div className="magic-IETM-composition-img">
              <img src={magicImg1} alt="" />
              <div>演练导控系统及空中作战仿真引擎组成</div>
            </div>
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

          <div className="magic-wg-technical">
            <CommonTitle title="技术特点" />
            <div className="helicopter-system-technical-content">
              <div><Characteristics num="01" content="主要开展以空军指挥员为中心的指挥所整体性、精准性、关联性的指挥训练，以实战需求为牵引，实施多方向、多想定、多层次的指挥训练。" subTitle="以作战指挥训练为主"/></div>
              <div><Characteristics num="02" content="仿真节点包括总导演部、红方导演部、蓝方导演部以及多个指挥所，共计600多个仿真节点。" subTitle="仿真节点数量庞大"/></div>
              <div><Characteristics num="03" content="在建设过程中及建成后，系统经过了多次大规模作战指挥训练的演习实战检验和考验，充分体现出抗压性强、实用性强、稳定性好等显著特点。" subTitle="经过多次演习实战"/></div>
            </div>
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default AirForce;
