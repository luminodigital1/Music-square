import React from 'react';
import heart from './../../../Images/heart.png';
import msg from './../../../Images/messages-2.png';
import sendmsg from './../../../Images/send-2.png';
import './StartDiscussionEntity.css'

function StartDiscussionEntity(props) {
  return (
    <div className=" info-cont col-md-9" style={{marginLeft: -4, marginTop: -20}}>
        <div className='d-flex row'>
            <p className='entity-head'> {props.heading} </p>
            <div className='offset-md-8'>
            <p className='entity-time col-md-12 offset-md-2 mr-5'> {props.time} </p>
            </div>
        </div>
        <div className='d-flex'>
            <p className='entity-desp col-md-9'> {props.desp} </p>
            <div className='d-flex offset-md-1' style={{marginTop: 35, marginRight: -20, paddingInline: 22}}>
                <img src={heart} alt="" height="25" width="25" />
                <img src={msg} alt="" height="25" width="25" />
                <img src={sendmsg} alt="" height="25" width="25" />
            </div>
        </div>
        <div style={{backgroundColor: '#ccc', height: '1px', marginBottom: 10}}></div>
    </div>
  );
}

export default StartDiscussionEntity;
