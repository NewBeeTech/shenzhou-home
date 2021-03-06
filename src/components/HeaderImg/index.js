import './style.css';
import React, { Component } from 'react';
import headImg from '../../assets/images/header-img.png';
import { dispatch } from '../../store';
import { push } from 'react-router-redux';


class Header extends Component {
  render() {
    return (
      <div>
        <a name={this.props.name} id={this.props.name} className="title-target"> 
           <span className="title-placeholder"></span>
        </a>
        <div className="Header-img" style={{backgroundImage: `url(${headImg})`, backgroundSize: 'cover'}}>
          <div className="Header-img-bottom">
            <div className="Header-img-item animated bounceIn"
              onClick={() => {
                dispatch(push('/max-sim'))
              }}
            >
              <div>MAXSim</div>
              <div>仿真平台</div>
            </div>
            <div className="Header-img-item animated bounceIn"
              onClick={() => {
                dispatch(push('/magic-book'))
              }}
            >
              <div>MagicBook</div>
              <div>虚拟仿真平台</div>
            </div>
            <div className="Header-img-item animated bounceIn"
                onClick={() => {
                  dispatch(push('/magic-IETM'))
                }}
            >
              <div>MagiclETM</div>
              <div>交互式电子手册平台</div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Header;
