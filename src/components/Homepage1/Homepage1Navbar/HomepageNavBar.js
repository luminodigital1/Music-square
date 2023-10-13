import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../LandingPage/LandingPageNavbar/Navbar.css';
import logo from '../../../Images/logo.png';
import sms from '../../../Images/sms.png';
import notification from '../../../Images/notification.png'; 
import profilepic1 from '../../../Images/profilePic1.png';
import NotificationList from '../../FindCollabPage/ApplicationAccepted/NotificationList';
import ceo from '../../../Images/CEO.png';
import Popup from 'reactjs-popup';

function HomepageNavBar() {
  const [activeNavItem, setActiveNavItem] = useState("");

  // Function to handle navbar item click and set the active item
  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };
  const [isListVisible, setListVisible] = useState(false);
  const notifications = [
    {
      imageSrc: ceo,
      text: 'Sean has accept your collab request.',
      time: 'Just now',
    },
    {
      imageSrc: ceo,
      text: 'Asad left a 5 star review.',
      time: '29 Aug, 2023',
    },
    {
      imageSrc: ceo,
      text: 'Asad left a 5 star review.',
      time: '29 Aug, 2023',
    },
    {
      imageSrc: ceo,
      text: 'Complete your KYC to get more of platform',
      time: '21 Aug, 2023',
    },
    {
      imageSrc: ceo,
      text: 'New order has started',
      time: '2 week ago',
    },
    {
      imageSrc: ceo,
      text: 'Received 1 message from Mahnoor Maqsood',
      time: '2 week ago',
    },
    // Add more items as needed
  ];

  const toggleList = () => {
    setListVisible(!isListVisible);
  };

    //with bootstrap
    return(
    <div className=" my-1 fw-bold border border-gray-400 mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-5 bg-transparent">
        <img src={logo} alt="Your Logo" width="150" height="50" />
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
          <li>
              <a className="nav-link navbar-nav me-3" href="#" style={{marginLeft: 100}}>Find Artists</a>
            </li>
            <li>
              <a className="nav-link navbar-nav me-3" href="#">Find Job <span className="sr-only"></span></a>
            </li>
            <li>
              <a className="nav-link navbar-nav me-3" href="#">Post Job</a>
            </li>
            <li>
              <Link className="nav-link" to="/findcollab" onClick={() => handleNavItemClick("Find Collabs")}>Find Collabs</Link>
              {/* <a className="nav-link navbar-nav me-3" href="#">Find Collabs <span className="sr-only"></span></a> */}
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
                    <Popup trigger={<img src={notification} alt="Your notification" width="30" height="30" 
                    onClick={toggleList}
                    style={{marginRight: 20}} />}
                    closeOnDocumentClick ={false}
                    position="bottom right"
                    contentStyle={{
                      // display : 'none',
                      width : '405px',
                      // height: '400px',
                      overflowY: 'visible',
                      marginBottom: 0,
                      paddingBottom: 0,
                      border: 1,
                      borderRadius: 1,
                      borderColor: 'grey'
                    }}
                    >
                      <NotificationList notifications={notifications}/>
                    </Popup>
                    {/* {isListVisible && <NotificationList notifications={notifications} />} */}

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

export default HomepageNavBar