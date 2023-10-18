import React from 'react';
import pp from '../../../Images/pp2.png';
import call from '../../../Images/call.png';
import videocall from '../../../Images/video-call.png';
import search from '../../../Images/search.png';
import settings from '../../../Images/setting-2.png';

function CommunitiesHeader() {
  return (
    <div className="d-flex p-2" style={{backgroundColor: 'white'}}>
      <img className="circular-pp" src={pp} alt ="" height="50px" width="50px" style={{marginTop: 8}} />
      <div  style={{marginLeft:5, marginTop: 8}}>
        <p className="p-desp">My Community</p>
        <div className="d-flex" >
          <p className="p-status" style={{color:"#889696", fontSize: 12}} >12.5 K Members,</p>
          <p className="p-status" style={{color: "#00C82C", fontSize: 12}}>915 Online</p>
        </div>
      </div>
      <div className="d-flex offset-md-5 icons-div">
        <div className="" style={{marginRight: 20, marginLeft: 150}}>
            <img src={videocall} alt ="" height="20px" width="20px"/>
        </div>
        <div className="" style={{marginRight: 20}}>
            <img src={call} alt ="" height="20px" width="20px"/>
        </div>
        <div className="" style={{marginRight: 20}}>
            <img src={search} alt ="" height="20px" width="20px"/>
        </div>
        <div className="">
            <img src={settings} alt ="" height="20px" width="20px"/>
        </div>
      </div>
    </div>
  );
}

export default CommunitiesHeader;
