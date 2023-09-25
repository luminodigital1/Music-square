import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import Logo from './Logo'
import './Navbar.css'
import Screen1 from '../Screen1'
import logo from '../Images/logo.png'

function Navbar() {

  // State to track the active item
  const [activeNavItem, setActiveNavItem] = useState("Sign Up");

  // Function to handle navbar item click and set the active item
  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

    //with bootstrap
    return(
    <div className=" my-1 fw-bold border border-gray-400 mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-5 bg-transparent">
        <img src={logo} alt="Your Logo" width="150" height="50" />
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
          <li className={`nav-item ${activeNavItem === "Home" ? "active-nav-item" : ""}`}>
          <Link className="nav-link" to="/homepage1" onClick={() => handleNavItemClick("Home")}>Home</Link>
              {/* <a className="nav-link navbar-nav me-3" href="#" onClick={() => handleNavItemClick("Home")}>Home</a> */}
            </li>
            <li className={`nav-item ${activeNavItem === "Community" ? "active-nav-item" : ""}`}>
              <a className="nav-link navbar-nav me-3" href="#" onClick={() => handleNavItemClick("Community")}>Community <span className="sr-only"></span></a>
            </li>
            <li className={`nav-item ${activeNavItem === "About" ? "active-nav-item" : ""}`}>
              <a className="nav-link navbar-nav me-3" href="#" onClick={() => handleNavItemClick("About")}>About</a>
            </li>
            <li className={`nav-item ${activeNavItem === "How it works" ? "active-nav-item" : ""}`}>
              <a className="nav-link navbar-nav me-3" href="#" onClick={() => handleNavItemClick("How it works")}>How it works <span className="sr-only"></span></a>
            </li>
            <li className={`nav-item ${activeNavItem === "Login" ? "active-nav-item" : ""}`}>
              <a className="nav-link navbar-nav me-3" href="#" onClick={() => handleNavItemClick("Login")}>Login</a>
            </li>
            <li className={`nav-item ${activeNavItem === "Sign Up" ? "active-nav-item" : ""}`}>
              <Link className="nav-link" to="/signup" onClick={() => handleNavItemClick("Sign Up")}>Sign Up</Link>
              {/* <a className="nav-link" href="Screen1" onClick={() => handleNavItemClick("Sign Up")}>Sign Up</a> */}
            </li>
          </ul>
        </div>
      </nav>
      {/* <hr color='grey' /> */}
    </div>
  );
}

export default Navbar