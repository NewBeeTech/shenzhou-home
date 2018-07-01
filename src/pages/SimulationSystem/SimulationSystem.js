import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import CompositionBody from '../../components/CompositionBody';
import Characteristics from '../../components/Characteristics'
import Carousel from '../../components/Carousel'
import { compositionData, projectData } from './SimulationSystemData';

import topImg from '../../assets/images/simulation-system-bg.png';
import magicImg from '../../assets/images/simulation-system-img1.png';

class SimulationSystem extends Component {
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
          <Nav selected="contact" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="新型编制单元作战效能仿真系统" subTitle="COMBAT EFFECTIVENESS SIMULATION SYSTEM" />
          <ProductIntroduction 
            title="产品简介" 
            content={['本系统主要用于对新型编制单元的装备体系作战能力进行仿真和评估，研究该单元在不同作战环境、不同作战任务下的装备编配体系和作战战术。系统在MAXSim仿真平台基础上，深度扩展开发了陆军装备的雷达探测模型、信息融合模型、目标分配模型、目标打击模型、目标毁伤模型等模型库，融合了客户自有的专业研究成果（模型），实现了连排班三个级别的作战指挥军事概念模型，完成了具有一定实战背景的作战想定。']}
          />

          <div className="magic-wg-system-composition">
            <CommonTitle title="系统组成" />
            <div className="simulation-system-composition-title">系统主要包括装备建模工具、行为建模工具、作战想定编辑工具、仿真过程记录/回放工具、仿真数据统计工具等。 </div>
            <div>{this.showCompositionData(compositionData)}</div>
            <div className="simulation-system-composition-img">
              <img src={magicImg} alt="" />
              <div>运行综合管理工具</div>
            </div>
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

          <div className="magic-wg-technical">
            <CommonTitle title="技术特点" />
            <div className="magic-wg-technical-content">
              <div className="magic-wg-technical-content-div1"><Characteristics num="01" content="作战仿真想定红方兵力规模达到了800个以上，蓝方兵力规模达到300个以上;作战实体级达到了1200个，部件级实体达到了6000个。" subTitle="实体数量规模大"/></div>
              <div className="magic-wg-technical-content-div2"><Characteristics num="02" content="装备模型达到单兵、单装，指挥模型达到班、小组长。探测模型实现人眼感知、雷达、红外、可见光等各类探测模型。通信模型实现了包括无线电台在内的各种型号通信设备的模拟。" subTitle="仿真精度高"/></div>
              <div className="magic-wg-technical-content-div3"><Characteristics num="03" content="以数据方式记录了仿真过程中战场态势所发生所有信息。包括编制编成、实体位置、指挥信息、探测数据、目标分配/选择、通信数据、开火数据、命中毁伤数据等。" subTitle="仿真数据记录完整"/></div>
              <div className="magic-wg-technical-content-div4"><Characteristics num="04" content="数据统计包括初始数据统计、任务完成率、杀伤率、生存率、火力贡献率、编成损耗率、探测列表、开火信息、弹药损耗等。" subTitle="数据统计针对性强"/></div>
            </div>
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default SimulationSystem;