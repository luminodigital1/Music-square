import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/LandingPage/LandingPageNavbar/Navbar.css';
import logo from '../Images/logo.png';
import sms from '../Images/sms.png';
import notification from '../Images/notification.png'; 
import profilepic1 from '../Images/profilePic1.png';

function Homepage2NavBar() {

    //with bootstrap
    return(
    <div className=" my-1 fw-bold border border-gray-400 mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-5 bg-transparent">
        <img src={logo} alt="Your Logo" width="150" height="50" />
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
          <li>
              <a className="nav-link navbar-nav me-3" href="#" style={{marginLeft: 150}}>Find Artists</a>
            </li>
            
            <li>
              <a className="nav-link navbar-nav me-3" href="#">Find Collabs <span className="sr-only"></span></a>
            </li>
            <li>
              <a className="nav-link navbar-nav me-3" href="#">Post Collabs</a>
            </li>
            <li>
              <Link className="nav-link" to="">How it works</Link>
              {/* <a className="nav-link" href="Screen1" onClick={() => handleNavItemClick("Sign Up")}>Sign Up</a> */}
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav2">
            <ul className="navbar-nav">
                <li>
                    <img src={sms} alt="Your sms" width="30" height="30"
                    style={{marginRight: 20}}/>
                </li>
                <li>
                    <img src={notification} alt="Your notification" width="30" height="30"
                    style={{marginRight: 20}} />
                </li>
                <li>
                    <img src={profilepic1} alt="Your pic" width="30" height="30" />
                </li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Homepage2NavBar