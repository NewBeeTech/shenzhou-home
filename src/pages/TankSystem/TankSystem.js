import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import CompositionBody from '../../components/CompositionBody';
import Characteristics from '../../components/Characteristics'
import Carousel from '../../components/Carousel'
import { compositionData, projectData } from './TankSystemData';

import topImg from '../../assets/images/tank-system-bg.png';

class TankSystem extends Component {
  showCompositionData(data) {
    const views = [];
    if(data) {
      const lengthNum = data.length;
      data.map((item, key) => {
        views.push(<CompositionBody leftImg={item.img} title={item.title} content={item.content} key={key} islast={lengthNum - 1 === key}/>);
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
          <TopImgForMagic topImg={topImg} title="坦克机动作战协同虚拟训练系统" subTitle="COLLABORATIVE VIRTUAL TRAINING OF TANK MANEUVER SYSTEM" />
          <ProductIntroduction 
            title="产品简介" 
            content={['新式主战坦克具有机动能力强、射程远、射速快的特点。坦克战斗与机动过程中，需要不同岗位上的乘员进行密切协同配合，才能更好地发挥先进武器的性能和威力。本系统在构造坦克车内外三维模型、运动学模型、零部件模型的基础上，编辑坦克分队遂行作战任务的剧情，合理设置敌情，要求坦克车各乘员密切配合、快速反应，充分发挥装备机动能力和攻击能力，从而达到训练提高坦克乘员准确判断、熟练操作、密切协同能力水平的目的。系统还提供了坦克装备理论基础、组成结构、传动机构原理等教学讲解功能。']}
          />

          <div className="magic-wg-system-composition">
            <CommonTitle title="系统功能" />
            {this.showCompositionData(compositionData)}
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

          <div className="magic-wg-technical">
            <CommonTitle title="技术特点" />
            <div className="helicopter-system-technical-content">
              <div><Characteristics num="01" content="能够实现教官与学员联机互动、武器装备不同岗位人员的协同训练、红蓝双方或多方实体的对抗训练。" subTitle="系统提供分布式训练功能（DMT)" /></div>
              <div><Characteristics num="02" content="不同岗位的乘员具有不同的视景，可以进行各自职责范围内的操作。" subTitle="坦克乘员协同训练"/></div>
              <div><Characteristics num="03" content="坦克乘员CGF能够模拟特定岗位人员的操作，可以智能配合其它岗位上实际受训乘员的操作，使陪同受训者同样获得训练的效果。" subTitle="CGF模拟特定岗位人员的操作"/></div>
            </div>
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default TankSystem;
