
import React from 'react';
import './Profile.css';
import ProfilePic from '../Images/ProfileImg.png';

const ImageComponent = ({ imageUrl }) => {
  return (
    <div className="col-md-3">
        <img className="profile" src={ProfilePic} alt=""/>
    </div>
  );
};

export default ImageComponent;
