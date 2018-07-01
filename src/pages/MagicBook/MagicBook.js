import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import CompositionBody from '../../components/CompositionBody'
import Carousel from '../../components/Carousel'
import { projectData, compositionData, anliData, zichengData } from './MagicBookData';
import { dispatch } from '../../store';
import { push } from 'react-router-redux';

import topImg from '../../assets/images/magic-book-bg.png';
import magicImg from '../../assets/images/magic-book-img1.png';

class MagicBook extends Component {
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

  showAnliDataList (data) {
    const views = [];
    if(data) {
      data.map((item, key) => {
        views.push(
          <div key={key} className="max-sim-anli-item"
            onClick={() => {
              dispatch(push(item.url))
            }}
          >
            <div className="max-sim-anli-img"><img src={item.img} alt="" /></div>
            <div>{item.title}</div>
          </div>
        )
      })
    }
    return views;
  }

  showZichengData(data) {
    const views = [];
    if(data) {
      const lengthNum = data.length;
      data.map((item, key) => {
        views.push(
          <div key={key} className="max-sim-zucheng-item">
            <div className="max-sim-zucheng-title">{item.title}</div>
            <div className="max-sim-zucheng-content">{item.content}</div>
          </div>
        )
        if (lengthNum !== key + 1 ) {
          views.push(<div className="max-sim-zucheng-line"/>)
        }
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
          <TopImgForMagic topImg={topImg} title="MagicBook虚拟仿真平台" subTitle="MAGICBOOK VIRTUAL SIMULATION PLATFORM" />
          <ProductIntroduction 
            title="产品简介" 
            content={
              ['MagicBook虚拟仿真平台是一套具备高分辨率三维仿真功能的虚拟仿真制作开发、教学与管理平台。它采用开放式结构和模块化技术，提供从内容创建管理、目标规划、知识传递、实时演练到汇报总结的全生命周期训练模式和一站式虚拟实验解决方案。尤其是能为操作流程复杂的训练和意外情况处置的训练提供性价比极高的选择，它将在军事训练领域和民用领域发挥更大的作用。']}
          />
         
         <div className="magic-st-system-composition magic-st-zucheng-composition">
           <CommonTitle title="系统组成" />
           <div className="simulation-system-composition-title">MagicBook由开发制作环境、管理环境、运行环境三大部分组成。</div>
           <div className="magic-book-zucheng-composition">
             <div className="magic-book-zucheng-composition-img">
                <img src={magicImg} alt="" />
                <div>MagicBook虚拟仿真平台组成</div>
              </div>
             <div className="magic-book-zucheng-right">{this.showZichengData(zichengData)}</div>
           </div>
        </div>

          <div className="magic-book-system-composition">
            <CommonTitle title="系统功能" />
            {this.showCompositionData(compositionData)}
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="产品图片" color="#fff"/>
            <Carousel data={projectData} />
          </div>

          <div className="magic-st-technical">
            <CommonTitle title="典型案例" />
            <div className="max-sim-anli-body">
              {this.showAnliDataList(anliData)}
            </div>
          </div>
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default MagicBook;
