import React from 'react';
import pp from '../../../Images/chats-profile-pic.png';
import './NewMsg.css';
function NewMsg(props) {
  return (
    <div className=" d-flex pt-3">
      <img src={pp} alt="" height="50px" width="50px" style={{marginRight: 1}} />
      <table className="col-md-10">
        <tr>
            <td className="msg-name " >{props.name}</td>
            <td className="msg-time " style={{textAlign: 'right'}}>{props.time}</td>
        </tr>
        <tr>
            <td className="msg-desp " >{props.msg}</td>
            <td style={{display: 'flex', textAlign: 'right', justifyContent: 'right', height: 20}}>
              <p className="msg-count " >{props.count}</p>
            </td>
        </tr>
      </table>
    </div>
  );
}

export default NewMsg;
