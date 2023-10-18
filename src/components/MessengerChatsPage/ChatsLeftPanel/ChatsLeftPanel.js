import React from 'react';
import Search from '../Search/Search';
import './ChatsLeftPanel.css';
import NewMsg from '../NewMsg/NewMsg';
import SendPic from '../SendPic/SendPic';
import VoiceMsg from '../VoiceMsg/VoiceMsg';
import Message from '../Message/Message';
import { Navigate, useNavigate } from 'react-router-dom';

function ChatsLeftPanel() {
  const navigate = useNavigate();

  const navigateToComm = () => {
    navigate('/communities'); // Navigate to the About page
  };

    const name = "Sean Kim";
    const msg= "Guys I am going to perform...";
    const time = "9:07 PM ";
    const count = "2";

    const name2 = "Mahnoor Janam";
    const msg2= "Check this out.";
    const time2 = "20m ago";

    const name3 = "Asad Ali";
    const msg3= "Voice Message";
    const time3 = "1h ago";

    const name4 = "Kumail Abbas";
    const msg4= "Okay Mate";
    const time4 = "Yesterday";
    const status4 ="Seen";

    const name5 = "Monkey De Luffy";
    const msg5= "May be this would work";
    const time5 = "7/29/2023";
    const status5 = "Sent";

  return (
    <div className="col-md-3 p-3" style={{backgroundColor: 'white'}}>
      <Search/>
      <div className="d-flex mt-3">
        <button className="col-md-6 chats-btn">Chats</button>
        <button className="col-md-6 com-btn" onClick={navigateToComm} >Communities</button>
      </div>
      <div className="chat-list">
        <NewMsg name={name} msg={msg} time={time} count={count} />
        <SendPic name={name2} msg={msg2} time={time2} />
        <VoiceMsg name={name3} msg={msg3} time={time3} />
        <Message name={name4} msg={msg4} time={time4} status={status4} />
        <SendPic name={name2} msg={msg2} time={time2} />
        <VoiceMsg name={name3} msg={msg3} time={time3} />
        <Message name={name4} msg={msg4} time={time4} status={status4} />
        <SendPic name={name2} msg={msg2} time={time2} />
        <VoiceMsg name={name3} msg={msg3} time={time3} />
        <Message name={name4} msg={msg4} time={time4} status={status4} />
        <SendPic name={name2} msg={msg2} time={time2} />
        <VoiceMsg name={name3} msg={msg3} time={time3} />
        {/* <Message name={name4} msg={msg4} time={time4} status={status4} /> */}

      </div>
    </div>
  );
}

export default ChatsLeftPanel;
