import React, { useState } from 'react';
import '../Screen1.css';
import './Screen2.css';
import Logo from '../HomeScreen/Logo';
import { Navigate, useNavigate } from 'react-router-dom';

function Screen2() {
  const navigate = useNavigate();
  const navigateToProfileSetup = () => {
    navigate('/profilesetup'); // Navigate to the About page
  };

    const [digit1, setDigit1] = useState('');
    const [digit2, setDigit2] = useState('');
    const [digit3, setDigit3] = useState('');
    const [digit4, setDigit4] = useState('');

  return (
    <div className="row">
      <div className="d-flex">
        <div className="col-md-5 containerLeft">
          <div className="container">
            <h2 className="pl-5 pr-5" style={{fontFamily: 'GilroyBold', marginTop: 80, fontSize: 50,
              marginLeft: 50
          }}>
            Step into a World of Musical Talent and Creativity
            </h2>
            <br/>
            <p className="" style={{fontFamily: 'GilroyLight', marginLeft: 50, 
            marginBottom: 130}}>Embark on a Journey of Musical Discovery: 
            Where Your Talents Shine and Your Music Career Thrives.</p>
          </div>
          <p style={{fontFamily: 'GilroyBold', marginLeft: 60, marginBottom:0}}>Step 2</p>
          <p className="fs-4" style={{fontFamily: 'GilroyBold', marginLeft: 60,  marginBottom:0}}>Verify your email address </p>
          <p style={{fontFamily: 'GilroyLight', marginLeft: 60, marginBottom:0}}>
          Verify your email to unlock full access.
          </p>
          <div className="line-container">
            <div
              className="horizontal-line"
              style={{ backgroundColor: "black" }}
            ></div>
            <div className="horizontal-line"
            style={{ backgroundColor: "black" }}
            ></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
          </div>
        </div>

        <div className="container" 
        style={{marginTop:100}}>
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center">
              <Logo/>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="right-side">
                <h4 className='code-title'>Please check your inbox</h4>
                <p className='code-desc'>We have send a code to email address <br/> abc*****yz@gmail.com</p>
                <div className="d-flex code">
                    <input className='digit'
                      // type="number"
                      value={digit1}
                      onChange={(e) => setDigit1(e.target.value)}
                      maxLength="1"
                    />
                    <input className='digit'
                      // type="number"
                      value={digit2}
                      onChange={(e) => setDigit2(e.target.value)}
                      maxLength="1"
                    />
                    <input className='digit'
                      // type="number"
                      value={digit3}
                      onChange={(e) => setDigit3(e.target.value)}
                      maxLength="1"
                    />
                    <input className='digit'
                      // type="number"
                      value={digit4}
                      onChange={(e) => setDigit4(e.target.value)}
                      maxLength="1"
                    />
                  </div>
                  <p className='resend-code'>Didn't get a code? <a href='' style={{color: 'gray'}}>Click to resend</a></p>
                  <button className="verify-button" onClick={navigateToProfileSetup}>Verify</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Screen2;