import React, { useState } from "react";
import "./Screen1.css"; // Import your CSS or use inline styles
import Logo from "./HomeScreen/Logo";
import SignupForm from "./components/SignupForm";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
// library.add(faUser);

function Screen1() {
  return (
    <div className="container-full">
      <div className="row">
        <div className="col-md-5 containerLeft">
          <h1 className="hignlight1">
            Join Our Vibrant Community of Musical Talent
          </h1>
          <h2 className="description1">
            Unlock endless opportunities to share your musical talents and build
            your career in the world of music
          </h2>
          <p className="step">Step 1</p>
          <p className="stepDescription">Create New Account</p>
          <p className="description1">
            Enter your email and create a secure password to setup your account
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
        <div className="col-md-7 containerRight">
          {/* <div style={{ marginLeft: 300 }}>
            <Logo />
          </div>
          <div className="button-container">
            <button className="google-button">
              Continue with Google
            </button>
            <button className="wallet-button">Connect Your Wallet</button>
          </div>
          <div className="line-container2">
            <div className="horizontal-line2"></div>
            <div className="or-text">OR</div>
            <div className="horizontal-line2"></div>
          </div> */}
          <SignupForm></SignupForm>
        </div>
      </div>
    </div>
  );
}

export default Screen1;
