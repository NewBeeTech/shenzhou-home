import './style.css';
import React, { Component } from 'react';
import headImg from '../../assets/images/header-img.png';


class Header extends Component {
  render() {
    return (
      <div className="Header-img" style={{backgroundImage: `url(${headImg})`, backgroundSize: 'cover'}}>
        <a name={this.props.name} id={this.props.name}> </a>
        <div className="Header-img-bottom">
          <div className="Header-img-item animated bounceIn">
            <div>MAXSim</div>
            <div>仿真平台</div>
          </div>
          <div className="Header-img-item animated bounceIn">
            <div>MagicBook</div>
            <div>虚拟仿真平台</div>
          </div>
          <div className="Header-img-item animated bounceIn">
            <div>MagiclETM</div>
            <div>交互式电子手册平台</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
