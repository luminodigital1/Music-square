import React from 'react';
import './NotificationSetting.css';
import Form from 'react-bootstrap/Form';
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import  ToogleElement from './ToogleElement'

function NotificationSetting() {
    
  return (
    <div className="info-cont notificationSettingContainer" style={{width : "180%"}}>
      <p className='notf-title'>Notifications</p>
      <p className='notf-desp'>Manage your notifications settings to receive updates and alerts</p>
      <div>
      <ToogleElement title = 'Input Messages' />
      </div>
      <div style={{backgroundColor: "#ccc", height: 1, marginTop: 20}} />

      <div>
      <ToogleElement title = 'Collabs Messages' />
      </div>
      <div style={{backgroundColor: "#ccc", height: 1, marginTop: 20}} />

      <div>
      <ToogleElement title = 'Collabs Updates' />
      </div>
      <div style={{backgroundColor: "#ccc", height: 1, marginTop: 20}} />

      <div>
      <ToogleElement title = 'Mentions and Tags' />
      </div>
      <div style={{backgroundColor: "#ccc", height: 1, marginTop: 20}} />

      <div>
      <ToogleElement title = 'Login Attempts' />
      </div>
      <div style={{backgroundColor: "#ccc", height: 1, marginTop: 20}} />

      <div>
      <ToogleElement title = 'Collab Status Updates' />
      </div>
      <div style={{backgroundColor: "#ccc", height: 1, marginTop: 20}} />

      <div>
      <ToogleElement title = 'Account Security' />
      </div>
      <div style={{backgroundColor: "#ccc", height: 1, marginTop: 20}} />

      <div style={{marginBottom: 20}}>
      <ToogleElement title = 'Password Resets' />
      </div>
      
    </div>
  );
}

export default NotificationSetting;
