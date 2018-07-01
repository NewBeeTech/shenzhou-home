import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import CompositionBody from '../../components/CompositionBody';
import Characteristics from '../../components/Characteristics'
import Carousel from '../../components/Carousel'
import { compositionData, projectData } from './CarLauncherData';

import topImg from '../../assets/images/car-launcher-bg.png';

class CarLauncher extends Component {
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
          <TopImgForMagic topImg={topImg} title="发射车虚拟操作训练系统" subTitle="MISSILE LAUNCH VEHICLE VIRTUAL OPERATION TRAINING" />
          <ProductIntroduction 
            title="产品简介" 
            content={['火箭军发射车建造成本高，任何误操作可能造成重大损失。发射车机动演习涉及敏感事态，实际场地训练受到诸多限制。火箭军发射车操作必须做到万无一失。本系统在发射车外部三维模型、车辆运动模型、车辆操作面板模型等基础上，编辑包含发射车位置、状态等多种要素的战术想定，构造发射车遂行机动发射任务的战术背景，要求受训操作手严格按照装备操作规程，进行操作流程训练，使得受训者充分掌握操作流程，准确高效执行任务。系统还提供了发射车故障判断处置等教学训练功能']}
          />

          <div className="magic-wg-system-composition">
            <CommonTitle title="系统组成" />
            <div>{this.showCompositionData(compositionData)}</div>
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

          <div className="magic-wg-technical">
            <CommonTitle title="技术特点" />
            <div className="helicopter-system-technical-content">
              <div><Characteristics num="01" content="第三人称视图和第一人称操作视图完全一致。操作面板与外部动作完全一致。用户进行虚拟训练时所获得操作经验近似于实际操作体验。" /></div>
              <div><Characteristics num="02" content="（2）数据手套等外部设备的使用，让用户操作更加接近真实。" /></div>
              <div><Characteristics num="03" content="（3）完整展现发射车进行发射时产生的爆炸、烟、火等特效，并且支持对抗双方进行交互式对抗训练。 " /></div>
            </div>
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default CarLauncher;