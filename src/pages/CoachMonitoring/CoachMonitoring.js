import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import CompositionBody from '../../components/CompositionBody';
import Characteristics from '../../components/Characteristics'
import Carousel from '../../components/Carousel'
import { compositionData, projectData } from './CoachMonitoringData';

import topImg from '../../assets/images/coach-monitoring-bg.png';

class CoachMonitoring extends Component {
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
          <Nav selected="resolve" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="教练监控系统" subTitle="TRAINING MONITORNING SYSTEM" />
          <ProductIntroduction 
            title="产品简介" 
            content={['本系统用于完成整个仿真作战过程的监控任务。系统核心功能为态势的监视与控制，当前态势下对红蓝方兵力在不同比例尺下的监视，同时在海图态势中对当前的战况进行干预及控制。对态势的监视及控制的目的在于培训操作人员对态势做出合理判断后并进行相关的决策达到最终的战术决策演练。该系统在配合各分系统协调运作的过程中既历练了分系统操作人员的设备操作能力又提高了监控系统操作人员的战术运筹能力。经过多次重复的训练，显著提高相关人员的军事素质。']}
          />

          <div className="magic-wg-system-composition">
            <CommonTitle title="系统功能" />
            <div>{this.showCompositionData(compositionData)}</div>
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

          <div className="magic-wg-technical">
            <CommonTitle title="技术特点" />
            <div className="magic-wg-technical-content">
              <div className="magic-wg-technical-content-div1"><Characteristics num="01" content="对软件的运行提供仿真控制和数据服务,为软件运行提供训练题目,采用数据库统一管理系统所用的题库、环境数据、仿真实体的参数等。" subTitle="多元化管理"/></div>
              <div className="magic-wg-technical-content-div2"><Characteristics num="02" content="对于整个仿真态势及攻击过程进行二维态势图的显示,同时展示不同比例尺下海图态势的显示，不同海图下对态势可以拖动及缩放，可以更精确形象的显示整个态势的细节。" subTitle="形象展示"/></div>
              <div className="magic-wg-technical-content-div3"><Characteristics num="03" content="从本艇到目标，以及武器、传感器进行多方面控制，以最贴切的模式，刻画出不同工况下的战场环境。" subTitle="多方位控制"/></div>
              <div className="magic-wg-technical-content-div4"><Characteristics num="04" content="针对整个仿真推演过程进行量化的结果评估，提供基于仿真推演的数据参考。" subTitle="准确的效能分析"/></div>
            </div>
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default CoachMonitoring;