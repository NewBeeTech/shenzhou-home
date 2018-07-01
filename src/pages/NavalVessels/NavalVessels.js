import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import CompositionBody from '../../components/CompositionBody';
import Characteristics from '../../components/Characteristics'
import Carousel from '../../components/Carousel'
import { compositionData, projectData } from './NavalVesselsData';

import topImg from '../../assets/images/naval-vessels-bg.png';

class NavalVessels extends Component {
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
          <TopImgForMagic topImg={topImg} title="水面舰艇损管虚拟训练系统" subTitle="SURFACE SHIP DAMAGE CONTROL VIRTUAL TRAINING SYSTEM" />
          <ProductIntroduction 
            title="产品简介" 
            content={['本系统用于水面舰艇官兵损管虛拟训练和考核。舰艇灭火堵漏正确应对、损管器材正确使用是舰上官兵必备职业技能。本系统在构建水面舰船、船用火火器、呼吸器等实体逻辑模型的基础上，编辑了舰船遂行军事任务的合理剧情，设置了在一定时间和空间范围内随机发生的舱室火情事故，触发官兵的损管行动和装备器材操作，利用强大的虚拟教官机制，实现训练和考核舰上官兵损管技能的目的。 ', '本系统还分别实现了干粉灭火器、喷水枪、呼吸器等损管器材日常检验等虚拟训练功能。']}
          />

          <div className="magic-wg-system-composition">
            <CommonTitle title="系统组成" />
            <div className="simulation-system-composition-title">系统功能包括：损管训练课程制作、训练课程管理、损管虚拟训练、损管技能考核。</div>
            <div>{this.showCompositionData(compositionData)}</div>
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

          <div className="magic-wg-technical">
            <CommonTitle title="技术特点" />
            <div className="helicopter-system-technical-content">
              <div><Characteristics num="01" content="场景真实感强，受训者可获得逼真的体验。系统实现了高度逼真的水面场景和舱内场景。支持高分辨率的三维外部模型和操作面板模型，支持天气、时令、烟、火、喷水等特效绘制。" /></div>
              <div><Characteristics num="02" content="具有功能强大的虚拟教官功能。面向损管业务的虚拟教官可按用户要求定制，既可全程指导也可部分指导。虚拟教官逻辑制作完全面向业务领域，不需要基础编程知识，易于实现和升级。" /></div>
              <div><Characteristics num="03" content="具有完备规范的课程管理功能。损管训练课程严格遵循SCORM2004标准，能够满足将来内容扩展升级的要求，满足不同专业、不同科目虚拟训练课程进行统一管理的要求。" /></div>
            </div>
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default NavalVessels;