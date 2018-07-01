import React, { Component } from 'react';
import Nav from '../../components/Nav';
import HeaderImg from '../../components/HeaderImg';
import Title from '../../components/Title';
import Company from '../../components/Company';
import Basics from '../../components/Basics';
import Product from '../../components/Product';
import Resolve from '../../components/Resolve';
import Footer from '../../components/Footer';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header animated bounceInDown">
          <Nav selected="home" />
        </div>
        <div className="Home-body">
          <HeaderImg name="home" />

          <Title name="culture" title="北京神舟智汇科技有限公司" />
          <Company />

          <Title name="basics" title="基础平台" />
          <Basics />

          <Title name="product" title="主要产品" />
          <Product />

          <Title name="resolve" title="解决方案" />
          <Resolve />

          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default Home;
