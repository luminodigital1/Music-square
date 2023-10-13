import React from 'react';
import './DisplayStyles.css';
import Ellipse19 from '../../../Images/Ellipse19.png';
import Ellipse17 from '../../../Images/Ellipse17.png';

const DisplayStyles = () => {

  return (

      <div className="col-md-6 display">
          <div className="col-md-9 offset-md-1">
          <div className="d-flex top-block">
            <div className="circular-image1">
              <img
              src = {Ellipse19}
                alt="Your Image"
              />
            </div>
            <div className="left-radius-box mb-2 mx-auto">
              <h1 className="mt-3" style={{textAlign: 'right', fontFamily: 'GilroyBold', marginRight: 10}}>Rhythm{' '} <br/>Revolution <br/>Rewards</h1>
            </div>
          </div>

          <div className="right-box d-flex">
            <div className="right-radius-box mt-2 mx-auto">
              <h1 className="mt-3" style={{textAlign: 'left', fontFamily: 'GilroyBold', marginLeft:10}}>Join the <br/>Symphony <br/>of Talent</h1>
            </div>
            <div className="circular-image2">
              <img
              src = {Ellipse17}
                alt="Your Image"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default DisplayStyles;
