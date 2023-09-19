import React, { useState } from 'react';
import './Screen1.css'; // Import your CSS or use inline styles
import Logo from './HomeScreen/Logo';
import SignupForm from './SignupScreens/Signupform';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
// library.add(faUser);

import Screen2 from './SignupScreens/Screen2';

function Screen1() {

  return (
    <div className='container-full'>
        <div className="containerLeft">
        <h1 className='hignlight1'>Join Our Vibrant Community of Musical Talent</h1>
        <h2 className='description1'>Unlock endless opportunities to share your musical talents and build your career in the world of music</h2>
        <p className="step">Step 1</p>
        <p className='stepDescription'>Create New Account</p>
        <p className='description1'>Enter your email and create a secure password to setup your account</p>
        
        <div className="line-container">
            <div className="horizontal-line" style={{backgroundColor: 'black'}}></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
        </div>
        </div>

        <div className='containerRight'>
            <div style={{marginLeft: 300}}>
            <Logo/>
            </div>
            <div className="button-container">
            <button className="google-button">
                {/* <FontAwesomeIcon icon={faUser} /> Continue with Google */}
                Continue with Google
            </button>
            <button className="wallet-button">
                {/* <FontAwesomeIcon icon={faWallet} /> Connect Your Wallet */}
                Connect Your Wallet
            </button>
            </div>
            <div className="line-container2">
                <div className="horizontal-line2"></div>
                <div className="or-text">OR</div>
                <div className="horizontal-line2"></div>
            </div>
            <div style={{marginLeft: 200}}>
            <SignupForm/>
            </div>
            
        </div>

    </div>
    // <div>
    //     <SignupForm/>
    // </div>
  );
}

export default Screen1;