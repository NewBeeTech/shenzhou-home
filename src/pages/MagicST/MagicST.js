import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import CharacteristicsRow from '../../components/CharacteristicsRow'
import Carousel from '../../components/Carousel'
import { projectData } from './MagicWGData';

import topImg from '../../assets/images/magic-st-bg.png';
import magicImg from '../../assets/images/magic-st-img1.png';

class MagicST extends Component {
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="product" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="MagicST电子沙盘推演系统" subTitle="MagicST ELECTRONIC SAND TABLE DEDUCTION SYSTEM" />
          <ProductIntroduction 
            title="产品简介" 
            content={
              ['电子沙盘推演系统集声、光、电于一体，可以逼真的显示作战区的地形、气象、交通等自然地理状况和军事设施、工事、兵力部署等重要军事目标，支持战场环境分析、战场态势显示和作战行动演练，为用户建立一个便捷的沉浸式交互推演环境。', 
              '电子沙盘推演系统基于地理信息数据库，通过推演控制、信息查询、三维影像显示、数据标定、方（预）案生成等功能实现作战态势生成和流程推演，主要用于初级指挥军官培训学员对敌我兵力部署、作战流程、兵力调动、作战行动、打击模式的研究，对部（分）队作战形成整体认识。']}
          />

          <div className="magic-st-system-composition">
            <ProductIntroduction 
              title="系统功能" 
              content={
                ['电子沙盘推演系统由环境绘制、信息管理、推演服务、环境分析及虚拟漫游五个模块组成。其中，地理信息数据库模块主要用于数字地图的获取和地理信息处理。包括重要目标多媒体数据、营区、中心库、待机阵地、转载阵地、指挥所、通信、气象、警戒、物资储备、危险目标、自然地理与社情信息资源等。']}
            />
            <div className="magic-st-system-composition-img">
              <img src={magicImg} alt="" />
            </div>
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

          <div className="magic-st-technical">
            <CommonTitle title="技术特点" />
            <div className="magic-st-technical-div1"><CharacteristicsRow num="01" content="电子沙盘在二维地图进行部署与任务规划，在推演过程中，二、三维联动进行态势显示，逼真的显示作战区的地形、气象、交通等自然地理状况和军事设施、工事、兵力部署等重要军事目标，支持战场环境分析、战场态势显示和作战行动演练，为作战分队战场态势研究、作战方案检验与优化、作战流程推演提供环境条件。" /></div>
            <div className="magic-st-technical-div2"><CharacteristicsRow num="02" content="能够完成对各级指挥人员情况的分析、判断与运筹计算等基本指挥技能训练; 能够完成情报信息分析、计划组织与协调控制等作战指挥训练; 能够完成部（分）队集结、战术机动、突（反）击作战、地面防卫作战行动推演训练。训练人员战位、编组与部队实际战术行动指挥岗位、指挥所编组和作战要素的配置基本一致，作战要素齐全。" /></div>
             
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default MagicST;
