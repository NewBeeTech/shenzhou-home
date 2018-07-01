import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import Characteristics from '../../components/Characteristics'
import Carousel from '../../components/Carousel'
import { projectData } from './RocketSystemData';

import topImg from '../../assets/images/rocket-system-bg.png';
import magicImg from '../../assets/images/rocket-system-img1.png';

class RocketSystem extends Component {
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="contact" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="火箭军战术训练模拟系统" subTitle="ROCKET TROOPS TACTICAL TRAINING SIMULATION SYSTEM" />
          <ProductIntroduction 
            title="产品简介" 
            content={['本系统能够用于机关参谋、基层指挥员，以及院校机关干部、教员、干部学员和任职培训学员的教学和训练，能实施导弹部队全程序、全内容、全要素、全装备、全员额的实战化战术训练，分析与评估合成训练效果，提供辅助教学服务。系统具有战术训练任务想定设置、训练过程调控、训练效果评估、参训要素间的实时信息交互等功能，支持无实兵参与的网上推演，并能够采用自动或人机交互的方式对训练过程和效果进行统计评估。']}
          />

          <div className="magic-wg-system-composition">
            <CommonTitle title="系统组成" />
            <div className="simulation-system-composition-title">由指挥训练分系统、导调分系统、分析评估分系统、推演分系统和数据库存储管理分系统五部分组成。</div>
            <div className="rocket-system-composition-img">
              <img src={magicImg} alt="" />
            </div>
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

          <div className="magic-wg-technical">
            <CommonTitle title="技术特点" />
            <div className="magic-wg-technical-content">
              <div className="magic-wg-technical-content-div1"><Characteristics num="01" content="符合火箭军部队实际作战流程。对部队集结、火力突击、测试、转载、占领阵地、发射等过程进行模拟，并对常规部队主要特情处置过程进行模拟，以期训练指挥员的临机处置能力，并为指挥员提供道路选择、阵地选择、部队能力等过程的辅助决策功能。"/></div>
              <div className="magic-wg-technical-content-div2"><Characteristics num="02" content="对火箭军部队实际作战过程中的主要威胁进行模拟。包括特战分队袭扰、爆破，战斗机空袭，远程精确打击，电子干扰等。实现了常规部队作战过程中的红蓝对抗训练。"/></div>
              <div className="magic-wg-technical-content-div3"><Characteristics num="03" content="通过导调信息、末端模拟信息与指挥系统形成完整的信息流闭环。在训练过程中，可通过导调席位对参训要素发布导调信息，如气象环境、电磁环境、人装受损等特情信息，丰富训练环境，更好的训练了指挥员在复杂战场环境中的指挥决策能力。" /></div>
              <div className="magic-wg-technical-content-div4"><Characteristics num="04" content="进行复盘分析，对战果战损情况进行统计分析并以图形图表的形式进行可视化展示，同时，可对参演要素的指挥作业能力、指挥决策能力、临机处置能力等进行评估。" /></div>
            </div>
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default RocketSystem;