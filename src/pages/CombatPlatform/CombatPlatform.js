import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import Carousel from '../../components/Carousel'
import Characteristics from '../../components/Characteristics'
import CompositionBody from '../../components/CompositionBody'
import { projectData, compositionData } from './CombatPlatformData';

import topImg from '../../assets/images/combat-platform-bg.png';
import magicImg1 from '../../assets/images/combat-platform-img1.png';
import magicImg2 from '../../assets/images/combat-platform-img2.png';

class CombatPlatform extends Component {
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
          <TopImgForMagic topImg={topImg} title="新型作战平台战法研究系统" subTitle="THE RESEARCH SYSTEM OF COMBAT TACTICS IN A NEW COMBAT PLATFOR" />
          <ProductIntroduction 
            title="产品简介" 
            content={
              [' 本系统以新型作战平台大规模攻击作战作为研究背景，通过对战场态势分析，经由AI专家系统，基于不同作战实体之间作战行为模型的相互影响，生成智能作战规则和想定方案。通过对智能自主作战过程的推演和分析评估，展示智能自主作战研究对新型装备需求、战法研究需求以及未来战场的影响。']}
          />
          
          <div className="magic-st-system-composition combat-platform-system-composition">
            <CommonTitle title="系统组成"/>
            <div>{this.showCompositionData(compositionData)}</div>
            <div className="magic-IETM-composition-img">
              <img src={magicImg2} alt="" />
              <div>系统总体组成</div>
            </div>

            <div className="magic-IETM-composition-img">
              <img src={magicImg1} alt="" />
              <div>系统总体框架</div>
            </div>
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

          <div className="magic-wg-technical">
            <CommonTitle title="典型案例" />
            <div className="helicopter-system-technical-content">
              <div><Characteristics num="01" content="通过GBB技术框架，实现战场态势信息（包括装备信息、行为模型信息、地形信息、想定信息等）的采集，并提供给AI专家系统，为AI专家系统生成作战行为组合规则提供支撑。" subTitle="基于GBB技术框架采集想定信息"/></div>
              <div><Characteristics num="02" content="以系统提供的元模型子集为基础，根据采集的想定信息，依据战场作战的基本战术规则，生成系列的实体作战模型和指挥模型，结合基本想定生成新的想定方案。" subTitle="自动生成智能战法及相应想定方案"/></div>
              <div><Characteristics num="03" content="对作战推演的过程数据进行统计，作为评估的定量数据；以专家依据不同任务需求设定的参数权重为依托，结合评估指标体系，形成评估方案，最后自动形成评估结果。" subTitle="定量与定性相结合自动生成评估结果"/></div>
            </div>
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default CombatPlatform;
