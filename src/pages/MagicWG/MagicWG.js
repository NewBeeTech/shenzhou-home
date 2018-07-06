import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import CompositionBody from '../../components/CompositionBody';
import Characteristics from '../../components/Characteristics'
import Carousel from '../../components/Carousel'
import { compositionData, projectData } from './MagicWGData';

import topImg from '../../assets/images/magic-wg-bg.png';
import magicImg from '../../assets/images/magic-wg-img1.png';

class MagicWG extends Component {
  showCompositionData(data) {
    const views = [];
    if(data) {
      const lengthNum = data.length;
      data.map((item, key) => {
        views.push(<CompositionBody leftImg={item.img} title={item.title} content={item.content} key={key} islast={true} />);
      })
    }
    return views;
  }
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="product" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="MagicWG兵棋推演系统" subTitle="MAGICWG WARGAME DEDUCTION SYSTEM" />
          <ProductIntroduction 
            title="产品简介" 
            content={[' 兵棋是各方使用代表战场的棋盘和军事力量的棋子，依据从战争实战经验中总结出的规则，对作战过程进行对抗推演的工具。通过对战争的深刻理解，以对抗方式对战争动态演化过程以及不确定性和偶然性对战争的影响进行推演，具有良好的对抗性、灵活性、逻辑性和严密性，可以深化对战争的认识，启发对问题的思考，找到解决问题的途径，成为研究战争、预测战争的重要工具。', '计算机兵棋推演系统主要用于各军兵种全程序、全要素、全内容作战行动推演，在动态对抗中，提高参训者的分析判断、指挥决策、特情处置、协调控制等综合能力。为作战指挥、军事训练、分队战术等教学实践提供专业平台，为受训者提供实时动态的战场态势、近似实战的训练环境和客观科学的评价手段，使训练由静态变为动态，实现教学资源整合和教学过程控制，增强教与学的互动，优化教学训练模式，提高教学训练效果']}
          />

          <div className="magic-wg-system-composition">
            <CommonTitle title="系统组成" />
            {this.showCompositionData(compositionData)}
            <div className="magic-wg-system-composition-img">
              <img src={magicImg} alt="" />
              <div>计算机兵棋推演子系统</div>
            </div>
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

          <div className="magic-wg-technical">
            <CommonTitle title="技术特点" />
            <div className="magic-wg-technical-content">
              <div className="magic-wg-technical-content-div1"><Characteristics num="01" content="推演工位编组、权限与实际岗位配置一致，指挥要素、作战要素齐全，并提供模型编辑与席位编辑工具，可任意扩展模型及推演席位;" /></div>
              <div className="magic-wg-technical-content-div2"><Characteristics num="02" content="能够完成各级指挥员及参谋人员的编组作业、指挥流程、运筹计算等基本技能训练；" /></div>
              <div className="magic-wg-technical-content-div3"><Characteristics num="03" content="能够完成战术机动、火力突击、防卫作战等各阶段作战行动和全流程作战行动推演，实现了规则及裁决流程外置，可通过可视化界面完成规则及裁决流程的添加与修改;" /></div>
              <div className="magic-wg-technical-content-div4"><Characteristics num="04" content="支持对部（分）队某一特殊行动、某一特殊战场和某一特殊环境的案例研究和情境再现，能够进行辅助教学，支持作战流程、指挥流程和各环节指挥要点的演示与教学。" /></div>
            </div>
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default MagicWG;
