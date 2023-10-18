import React from 'react';
import pp from '../../../Images/chats-profile-pic.png';
import pic from '../../../Images/gallery.png';
// import './NewMsg.css';
function SendPic(props) {
  return (
    <div className=" d-flex pt-3">
      <img src={pp} alt="" height="50px" width="50px" style={{marginRight: 1}} />
      <table className="col-md-10">
        <tr>
            <td className="msg-name">{props.name}</td>
            <td className="msg-time" style={{textAlign: 'right'}}>{props.time}</td>
        </tr>
        <tr>
            <td>
            <div className="d-flex">
            <img src={pic} alt="" height="20px" width="20px" style={{marginRight: 5}}/>
            <p className="msg-desp">{props.msg}</p>
        </div>
            </td>
        </tr>
      </table>
    </div>
  );
}

export default SendPic;
