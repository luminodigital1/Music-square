import React, { useState } from "react";
import "./Screen1.css"; // Import your CSS or use inline styles
import Logo from "../../../HomeScreen/Logo";
import SignupForm from "../../../components/SignupPages/SignupForm";
import google from '../../../Images/google.png';
import wallet from '../../../Images/wallet.png';

function Screen1() {
  return (

    <div className="row">
      <div className="d-flex">
        <div className="col-md-5 containerLeft">
          <div className="container">
            <h2 className="pl-5 pr-5" style={{fontFamily: 'GilroyBold', marginTop: 80, fontSize: 50,
              marginLeft: 50
          }}>
            Join Our Vibrant Community of Musical Talent
            </h2>
            <br/>
            <p className="" style={{fontFamily: 'GilroyLight', marginLeft: 50, 
            marginBottom: 130}}>Unlock endless opportunities to 
            share your musical talents and build 
              your career in the world of music.</p>
          </div>
          <p style={{fontFamily: 'GilroyBold', marginLeft: 60, marginBottom:0}}>Step 1</p>
          <p className="fs-4" style={{fontFamily: 'GilroyBold', marginLeft: 60,  marginBottom:0}}>Create new account</p>
          <p style={{fontFamily: 'GilroyLight', marginLeft: 60, marginBottom:0}}>
          Enter your email and create a secure password to set up your account.
          </p>
          <div className="line-container">
            <div
              className="horizontal-line"
              style={{ backgroundColor: "black" }}
            ></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
          </div>
        </div>

        <div className="container" 
        style={{marginTop:30}}>
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center">
              <Logo/>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div style={{display: "grid"}}>
              <div className="button-container">
                
                <button className="google-button">
                  <img src={google} alt="" style={{paddingInline:10}}/>
                  Continue with Google
                </button>
                <button className="wallet-button">
                <img src={wallet} alt="" style={{paddingInline:10}}/>
                  Connect Your Wallet</button>
              </div>
              <div className="line-container2">
                <div className="horizontal-line2"></div>
                <div className="or-text">OR</div>
                <div className="horizontal-line2"></div>
              </div>
              <SignupForm/>
              </div>
              </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Screen1;
