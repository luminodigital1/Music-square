import React from 'react';
import pp from '../../../Images/chats-profile-pic.png';
import pic from '../../../Images/microphone-2.png';
// import './NewMsg.css';
function Message(props) {
  return (
    <div className=" d-flex">
      <img src={pp} alt="" height="50px" width="50px" style={{marginRight: 1}} />
      <table className="col-md-10">
        <tr>
            <td className="msg-name">{props.name}</td>
            <td className="msg-time" style={{textAlign: 'right'}}>{props.time}</td>
        </tr>
        <tr>
            <td className="msg-desp">{props.msg}</td>
            <td className="msg-time" style={{textAlign: 'right'}}>{props.status}</td>
        </tr>
      </table>
    </div>
  );
}

export default Message;