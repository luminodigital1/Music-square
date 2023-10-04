import React from 'react';
import Notification from './Notification';

const NotificationList = ({ notifications }) => {
  const count = notifications.length;
  return (
    <div className="notification-list" style={{width: 400}}>
      <div className="d-flex border-bottom" style={{paddingLeft: -5, marginLeft: -5}}>
        <p style={{
          fontFamily: 'GilroyBold',
          marginLeft: 10,
          marginTop: 10
        }}>
          Notifications</p>
        <p 
        style={{
          paddingTop: 2,
          marginTop: 10,
          fontFamily: 'GilroyLight', 
          borderRadius: 50, 
          backgroundColor: '#fee500',
          borderColor: 'white',
          marginLeft: 30,
          height: 30,
          width: 30, 
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
          }} >
            {count}</p>
      </div>
      <ul style={{listStyleType: 'none', paddingLeft: 0}}>
        {notifications.map((notification, index) => (
          <li className="border-bottom" style={{marginLeft: -5}}>
            <Notification
              key={index}
              imageSrc={notification.imageSrc}
              text={notification.text}
              time={notification.time}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
