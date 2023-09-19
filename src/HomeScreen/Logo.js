import React from 'react';
import './Logo.css';
import logo from '../Images/logo.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo}
      alt="" className="logo-image" />
      {/* <h1 className="logo-title">MUSIC <br/> SQUARE</h1> */}
    </div>
  );
};

export default Logo;