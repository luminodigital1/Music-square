import React from 'react';
import pp from '../../../Images/pp2.png';
import call from '../../../Images/call.png';
import videocall from '../../../Images/video-call.png';
import more from '../../../Images/more.png';
import './ChatsHeader.css';

function ChatsHeader() {
  return (
    <div className="d-flex p-3" style={{backgroundColor: 'white'}}>
      <img className="circular-pp" src={pp} alt ="" height="50px" width="50px"/>
      <div >
        <p className="p-desp">Sean Kim</p>
        <p className="p-status">Online</p>
      </div>
      <div className="d-flex offset-md-8 icons-div">
        <div className="" style={{marginRight: 20, marginLeft: 50}}>
            <img src={videocall} alt ="" height="20px" width="20px"/>
        </div>
        <div className="" style={{marginRight: 20}}>
            <img src={call} alt ="" height="20px" width="20px"/>
        </div>
        <div className="" >
            <img src={more} alt ="" height="20px" width="20px"/>
        </div>
      </div>
    </div>
  );
}

export default ChatsHeader;
