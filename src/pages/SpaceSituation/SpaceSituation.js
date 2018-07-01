import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import Characteristics from '../../components/Characteristics'
import Carousel from '../../components/Carousel'
import { projectData, compositionData } from './SpaceSituationData';

import topImg from '../../assets/images/space-situation-bg.png';

class SpaceSituation extends Component {
  showCompositionData(data) {
    const views = [];
    if(data) {
      data.map((item, key) => {
        views.push(
          <div key={key} className="space-situation-system-system-item">
            <div><img src={item.img} alt=""/></div>
            <div className="space-situation-system-system-title">{item.title}</div>
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
          <Nav selected="contact" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="空间态势感知信息保障仿真系统" subTitle="SPATIAL SITUATIONAL AWARENESS INFORMATION SUPPORT SIMULATION SYSTEM" />
          <ProductIntroduction 
            title="产品简介" 
            content={
              ['本系统是一个集空间目标资源状态监测、空间目标资源需求分析、冲突排查、应急支持以及空间目标资源网常规管理于一体并相互关联、协调的计算机辅助决策支持系统。系统可将评估资源分配中的知识和经验，资源分配的基本原则，系统优化的基本思想等综合起来，构成系统知识库，再将进行评估资源分配时的思路和人工智能技术结合起来，构成系统推理机。根据评估空间目标资源状态信息，分析获得的数据信息，通过推理机调用有关的规则，最终给出评估结论。']}
          />
          <div className="magic-st-system-composition combat-platform-system-composition">
            <CommonTitle title="系统功能"/>
            <div className="space-situation-system-system">
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
              <div><Characteristics num="01" content="仿真模型精度高。采用已有的成熟算法，对每个算法单元进行单元测试，保证每个算法的计算误差和解算时间在要求的范围内。"/></div>
              <div><Characteristics num="02" content="空间目标数量大。结合仿真平台和卫星仿真平台，一方面通过仿真平台充分利用CPU的指令执行能力和内存的高吞吐量，另一方面通过卫星仿真平台利用GPU的强大并行计算能力和图形计算能力，组成CPU+GPU的强力组合，全面利用可用的硬件资源，极大提升了系统可承载的实体数量。" /></div>
              <div><Characteristics num="03" content="系統业务性强。本系统涉及到空间仿真和评估的各个方面，任务覆盖面大、业务性强。 "/></div>
            </div>
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default SpaceSituation;
