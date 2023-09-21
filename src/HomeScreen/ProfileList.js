import React from 'react';
import Profile from './Profile';
import arrowRight from '../Images/arrow-right.png';
import arrowLeft from '../Images/arrow-left.png';

const ProfileList = ({ imageUrl }) => {
  return (
<div className="container">
    <div className="d-flex" style={{textAlign: 'right', justifyContent: 'right',marginRight:0}}>
        <a href='#'>View all</a>
        <img style={{height:20,width: 20}} src={arrowLeft} alt=""/>
        <img style={{height:20,width: 20}} src={arrowRight} alt=""/>
    </div>
        <div className="row">
          <Profile/>
          <Profile/>
          <Profile/>
        </div>
      </div>
);
};

export default ProfileList;