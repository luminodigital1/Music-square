import React from 'react';
import './DisplayStyles.css';
import Ellipse19 from '../Images/Ellipse19.png';
import Ellipse17 from '../Images/Ellipse17.png';

const DisplayStyles = () => {

  return (

      <div className="container mx-auto col-md-6">
        <div className="d-flex">
          <div className="circular-image">
            <img
            src = {Ellipse19}
              alt="Your Image"
            />
          </div>
          <div className="left-radius-box mb-2 mx-auto">
            <h1 className="mt-3" style={{textAlign: 'right', fontFamily: 'GilroyBold'}}>Rhythm <br/>Revolution <br/>Rewards</h1>
          </div>
        </div>

        <div className="d-flex">
          <div className="right-radius-box mt-2 mx-auto">
            <h1 className="mt-3" style={{textAlign: 'left', fontFamily: 'GilroyBold'}}>Join the <br/>Symphony of <br/>Talent</h1>
          </div>
          <div className="circular-image">
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
