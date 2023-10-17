import React from "react";
import '../../Homepage1/Postpics/PostPic.css';
import dot from '../../../Images/dot.png';
import more from '../../../Images/more.png';
import heart from '../../../Images/heart.png';
import send2 from '../../../Images/send-2.png';
import message2 from '../../../Images/messages-2.png';
import bag from '../../../Images/archive-add.png';
import MyCollabVolume from "../../ProfilePage/ProfileTabs/MyCollabs/MyCollabVolume/MyCollabVolume";
const MyMusicTab = (props) => {
    
    return (
        <div>
        <div className="container border post-container">
            <div className="d-flex top-portion">
                <img src ={props.profilepicprop} alt="" height="50" width="50"/>
                <div className="">
                    <p className="post-name">{props.nameprop}</p>
                    <p className="post-area">{props.cityprop}, {props.countryprop}</p>
                </div>
                <img src={dot} alt="" height="5" width="5" className="dot"/>
                <p className="post-time">{props.timeprop}</p>
                <div className="offset-md-5">
                    <img src={bag} alt="" style={{marginLeft: 45}}/>
                    <img src={more} alt="" height="28" width="25" className="morebtn"/>
                </div>
            </div>
            <div className="postimg-container">
                {/* <AudioWave  audio ={dummyaudio}/> */}
                {/* <MyCollabVolume/> */}
                {/* <ProfileVolume/> */}
                <MyCollabVolume/>
            </div>
            <div className="d-flex pt-3">
                <img style={{marginRight: 20}} src={heart} alt="" height="25"/>
                <img style={{marginRight: 20}} className="" height="25" src={message2} alt=""/>
                <img className="" src={send2} height="25" alt=""/>
                <button className="profile-hirebtn">Hire me</button>
            </div>
            <p className="postdesp">Description Goes here. This is just a simple description or 
                the caption you put under the post to describe the post. 
                 There is not need to read is completely you can stop now. 
            </p>
        </div>
        <div className="container border post-container">
        <div className="d-flex top-portion" style={{marginBottom:20}}>
            <img src ={props.profilepicprop} alt="" height="50" width="50"/>
            <input type="text"
            placeholder="Type your comment"
            className="comment-box"/>
        </div>
        </div>
    </div>
    )
  }
  
  export default MyMusicTab