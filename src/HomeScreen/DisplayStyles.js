import React from 'react';
import './DisplayStyles.css';
import Ellipse19 from '../Images/Ellipse19.png';
import Ellipse17 from '../Images/Ellipse17.png';

const DisplayStyles = () => {

  return (
    <div style={{display: 'grid', marginLeft: 50}}>
    <div style={{display: 'flex', marginTop: 40}}>
      <div className="four-sided-circular-image">
        <img
        src = {Ellipse19}
          alt="Your Image"
        />
      </div>
      <div className="box1">
        <p style={{marginTop: 0}}>Rhythm <br/>Revolution <br/>Rewards</p>
      </div> 
  </div>
    <div style={{display: 'flex', marginTop: 40}}>
    <div className="box2">
      <p style={{marginTop: 0}}>Rhythm <br/>Revolution <br/>Rewards</p>
    </div> 
    <div className="four-sided-circular-image">
      <img
      src = {Ellipse17}
        alt="Your Image"
      />
    </div>
  </div>
  </div>
  );
};

export default DisplayStyles;
