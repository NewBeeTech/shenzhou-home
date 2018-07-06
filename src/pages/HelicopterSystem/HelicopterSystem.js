import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import Characteristics from '../../components/Characteristics'
import Carousel from '../../components/Carousel'
import { compositionData, projectData } from './HelicopterSystemData';

import topImg from '../../assets/images/helicopter-system-bg.png';

class HelicopterSystem extends Component {
  showCompositionData(data) {
    const views = [];
    if(data) {
      data.map((item, key) => {
        views.push(
          <div key={key} className="helicopter-system-system-item">
            <div><img src={item.img} alt=""/></div>
            <div>{item.title}</div>
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
          <TopImgForMagic topImg={topImg} title="直升机特情处置虚拟训练系统" subTitle="HELICOPTER SPECIAL SITUATION VIRTUAL TRAINING SYSTEM" />
          <ProductIntroduction 
            title="产品简介" 
            content={[' 本系统用于直升机飞行员在发动机空中停车的特情处置虚拟训练。发动机空中停车是直升机飞行员所面临的最危险的特情之一。特情发生后，飞行员必须迅速准确判断事件性质，当机立断进行一系列的处置操作。本系统在构造直升机飞行动力学模型、直升机内部舱室模型、多功能面板模型的基础上，编辑了直升机空中巡航的背景，设置了在一定时间区段随机发生发动机停车的特情，要求直升机飞行员进行合理、迅速、有效的处置，可训练和考验飞行员的情况判断能力、操作熟练程度，对于提高直升机飞行员面对致命性危险时的应对能力具有十分重要的意义。']}
          />

          <div className="magic-wg-system-composition">
            <CommonTitle title="系统功能" />
            <div className="helicopter-system-system">
              {this.showCompositionData(compositionData)}
            </div>
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

          <div className="magic-wg-technical">
            <CommonTitle title="技术特点" />
            <div className="helicopter-system-technical-content">
              <div><Characteristics num="01" content="直升机飞行员的舱外视景与舱内操作面板浑然一体，舱外视景逼真度高，舱内模型和多功能面板细节丰富，最大限度地创造第一人称视角下的真实体验。基于普通图形工作站进行视景仿真，其硬件成本低、绘制帧率稳定、性价比高。" /></div>
              <div><Characteristics num="02" content="具有特情处置知识经验的虚拟飞行教官能够在准确的时间节点、运用简洁的语言文字、采用丰富的提示手段，为受训飞行员提供指导。受训飞行员真正遇到特情时，能够做到胸有成竹、游刃有余、从容应对。" /></div>
              <div ><Characteristics num="03" content="直升机飞行员进行训练时不受时间、地点、天气、人员等条件限制。教官和管理者可以全面跟踪了解任何受训飞行员的训练过程情况和训练成绩。" /></div>
            </div>
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default HelicopterSystem;
