import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import CompositionBody from '../../components/CompositionBody';
import Characteristics from '../../components/Characteristics'
import Carousel from '../../components/Carousel'
import { compositionData, projectData } from './SubmarineSystemData';

import topImg from '../../assets/images/submarine-system-bg.png';

class SubmarineSystem extends Component {
  showCompositionData(data) {
    const views = [];
    if(data) {
      const lengthNum = data.length;
      data.map((item, key) => {
        views.push(<CompositionBody leftImg={item.img} title={item.title} content={item.content} key={key} islast={lengthNum - 1 === key} />);
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
          <TopImgForMagic topImg={topImg} title="海军潜艇作战推演系统" subTitle="NAVAL SUBMARINE WARFARE PROPULSION SYSTEM" />
          <ProductIntroduction 
            title="产品简介" 
            content={['本系统以MAXSim平台为潜艇作战推演系统架构，建立潜艇作战推演功能并实现整个作战推演系统仿真流程。利用本系统使参训人员熟悉潜艇兵力作战运用的专业知识，并能够满足教员的教学及研究功能。本系统通过想定编辑作战兵力信息、兵力战法、阵地信息、作战武器、传感器探测等信息，实现大型战场军事仿真模拟功能。系统所提供的态势展示，可投放大屏幕进行多人的想定展示，更加符合作战需求。在整个的作战过程可添加真实的作战数据进行复演分析，为真实的作战分析提供了高效率的分析工具。']}
          />

          <div className="magic-wg-system-composition">
            <CommonTitle title="系统功能" />
            <div className="simulation-system-composition-title">系统主要包括装备建模工具、行为建模工具、作战想定编辑工具、仿真过程记录/回放工具、仿真数据统计工具等。 </div>
            <div>{this.showCompositionData(compositionData)}</div>
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

          <div className="magic-wg-technical">
            <CommonTitle title="技术特点" />
            <div className="submarine-system-technical-content">
              <div><Characteristics num="01" content="该系统以MAXSim平台为支撑，构建了一套完整的潜艇兵种作战推演系统架构。它采用基于Agent统一建模语言（UML）的建模方法，从实体逻辑描述的角度，确定了潜艇兵种作战推演系统业务模型Agent的分类及平台模型Agent 的逻辑描述模型，给出了该兵种作战推演系统仿真流程，并通过仿真运行验证系统结构和模型的合理性。" subTitle="先进的作战推演系统架构"/></div>
              <div><Characteristics num="02" content="面对复杂多变的海战场，兵种指挥员需要快速、准确地进行作战指挥决策。本系统通过人机交互可以实时对作战进行干预和导调。" subTitle="人机交互性强"/></div>
            </div>
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default SubmarineSystem;