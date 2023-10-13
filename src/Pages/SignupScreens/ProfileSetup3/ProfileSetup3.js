import React, { useState } from "react";
import "../SignUp/Screen1.css"; // Import your CSS or use inline styles
import Logo from "../../../HomeScreen/Logo";
import "../ProfileSetup2/ProfileSetup2.css";
import "./ProfileSetup3.css";
import "../ProfileSetup1/ProfileSetup.css";
import favicon from "../../../Images/Favicon.png";
import x from "../../../Images/x.png";
import telegram from "../../../Images/telegram.png";
import discord from "../../../Images/discord.png";
import { Navigate, useNavigate } from 'react-router-dom';

function ProfileSetup3() {
    const navigate = useNavigate();

     const navigateToPS2 = () => {
       navigate('/profilesetup2'); // Navigate to the About page
    };

    const navigateToHomepage = () => {
      navigate('/homepage1')
    }


  
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
          <p style={{fontFamily: 'GilroyBold', marginLeft: 60, marginBottom:0}}>Step 5</p>
          <p className="fs-4" style={{fontFamily: 'GilroyBold', marginLeft: 60,  marginBottom:0}}>Socials</p>
          <p style={{fontFamily: 'GilroyLight', marginLeft: 60, marginBottom:0}}>
          Showcase your social media connections and networks.
          </p>
          <div className="line-container">
            <div
              className="horizontal-line"
              style={{ backgroundColor: "black" }}
            ></div>
            <div className="horizontal-line"
            style={{ backgroundColor: "black" }}></div>
            <div className="horizontal-line"
            style={{ backgroundColor: "black" }}></div>
            <div className="horizontal-line"
            style={{ backgroundColor: "black" }}></div>
            <div className="horizontal-line"
            style={{ backgroundColor: "black" }}></div>
          </div>
        </div>

        <div className="container" 
        style={{marginTop:100}}>
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center"
            style={{marginRight: 70}}
            >
              <Logo/>
            </div>
              <div style={{display: "grid", marginTop: 50}}>
              < div className="row justify-content-center">
                <div className="col-md-10 offset-md-3">                  
                    <div className="d-flex align-items-center">
                        <img className="connect-icon" src={favicon} alt=""
                        style={{marginTop: -15}}/>
                        <p className="col-md-5 connect-title">Play On Music Protocol</p>
                        <button className="connect-btn" type="submit" 
                        style={{width:160}}
                        >Connect</button>
                    </div>
                    <div className="d-flex">
                        <img className="connect-icon" src={x} alt=""/>
                        <p className="col-md-5 connect-title">X</p>
                        <button className="col-md-3 disconnect" type="submit"
                        >Disconnect</button>
                    </div>
                    <div className="d-flex">
                        <img className="connect-icon" 
                        style={{backgroundColor: "blue"}} src={telegram} alt=""/>
                        <p className="col-md-5 connect-title"
                        >Telegram</p>
                        <button className="col-md-3 disconnect" type="submit">Disconnect</button>
                    </div>
                    <div className="d-flex">
                        <img className="connect-icon" 
                        style={{backgroundColor: "darkblue"}} src={discord} alt=""/>
                        <p className="col-md-5 connect-title">Discord</p>
                        <button className="col-md-3 disconnect" type="submit">Disconnect</button>
                    </div>
                    <div className="d-flex button-margin ">
                            <button className="col-md-4 back" onClick={navigateToPS2}
                            style={{
                                width: 220,
                                height: 40,
                            }}>
                                Back
                            </button>
                            <button className="col-md-4 next" onClick={navigateToHomepage}
                            style={{
                                width: 220,
                                height: 40, 
                                marginRight: 10
                            }}
                            >
                                Let's Start
                            </button>
                        </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  );
}

export default ProfileSetup3;
