import React, { useState } from 'react';
import Profile from './Profile';
import arrowRight from '../Images/arrow-right.png';
import arrowLeft from '../Images/arrow-left.png';
import './ProfileList.css';
import ProfileDisplay from '../components/LandingPage/Profiles/ProfileDisplay';

const ProfileList = ({ imageUrl }) => {
  const [position, setPosition] = useState(0);

  const moveLeft = () => {
    // setPosition(position - 1);
  };

  const moveRight = () => {
    // setPosition(position + 1);
  };

  const data = [
    <ProfileDisplay/>,
    <ProfileDisplay/>,
    <ProfileDisplay/>,
    <ProfileDisplay/>,
    <ProfileDisplay/>
  ];

  return (
<div className="container viewall">
    <div className="d-flex col-md-12 offset-md-1" style={{textAlign: 'right', justifyContent: 'right',marginRight:0, marginBottom: 20}}>
        <a href='#'>View all</a>
        <img style={{height:20,width: 20}} src={arrowLeft} alt="" onClick={moveLeft}/>
        <img style={{height:20,width: 20}} src={arrowRight} alt="" onClick={moveRight}/>
    </div>
    <div className="container">
    <div className="row horizontal-scroll-container horizontal-scroll" 
    style={{ transform: `translateX(${position * -100}%)` }}>
            <ProfileDisplay/>,
            <ProfileDisplay/>,
            <ProfileDisplay/>,
            {/* <ProfileDisplay/> */}
            </div>
          </div>
       
      </div>
);
};

export default ProfileList;