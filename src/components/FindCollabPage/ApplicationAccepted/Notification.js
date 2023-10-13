import React from 'react';
import './Notification.css';

const Notification = ({ imageSrc, text, time }) => {
  return (
    <div className="container notify-container">
        <div className='d-flex align-items-center justify-content-center pt-2'>
            <img src={imageSrc} alt ="" height="55" width="55"/>
            <div className="container" style={{marginLeft:10}}>
            <p className="nf-txt">{text}</p>
            <p className="nf-time pt-1">{time}</p>
        </div> 
        </div>  
    </div>
  );
};

export default Notification;
