import img1 from '../../assets/images/magic-wg-img4.png';
import img2 from '../../assets/images/magic-wg-img3.png';
import img3 from '../../assets/images/magic-wg-img2.png';
import img4 from '../../assets/images/tank-system-img1.png';

import projectImg1 from '../../assets/images/submarine-system-project-img1.png';
import projectImg2 from '../../assets/images/submarine-system-project-img2.png';
import projectImg3 from '../../assets/images/submarine-system-project-img3.png';


export const compositionData = [{
    title: '仿真引擎',
    content: '采用离散事件与多核多线程技术，主要为整个系统提供事件管理，时间管理，数据交互和异常处理等服务。其功能涵盖了数据管理、模型管理、想定编辑、推演控制和作战效能评估等。',
    img: img1
  }, {
    title: '信息系统集成显示',
    content: '系统信息综合集成显示采用总体定制的方式外协，调用方案推演及对抗演练过程中的实时态势和记录数据。该分系统分为两大模块：态势显示和推演记录回放。其中态势显示模块又分为：电子海图服务、动态信息显示、部署信息显示、信息表页显示、环境信息显示、作战时间显示、辅助标绘与计算模块、显示控制模块等八个模块。推演记录回放模块包括：过程记录和过程复演模块。其中电子海图子模块为想定编辑软件、导调软件、数据复演分析软件等提供基本的电子海图服务；',
    img: img2
  }, {
    title: '潜艇作战行为建模',
    content: '主要包括潜艇仿真实体的战法规则建模，分为编辑状态模块和编辑战法模块两部分；',
    img: img3
  }, {
    title: '数据复演分析工具',
    content: '用于实际行动记录数据的录入和复演分析。其中数据记录实现仿真实体数据管理，对数据进行统一的管理与维护，包括数据的增加、删除、修改、查询、备份、还原、浏览和维护等。复演分析又分为数据管理和复演推进两个部分',
    img: img4
  }]

  export const projectData = [projectImg1, projectImg2, projectImg3]
  