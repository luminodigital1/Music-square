import React from 'react';
import Search from '../../MessengerChatsPage/Search/Search';
import NewMsg from '../../MessengerChatsPage/NewMsg/NewMsg';
import SendPic from '../../MessengerChatsPage/SendPic/SendPic';
import VoiceMsg from '../../MessengerChatsPage/VoiceMsg/VoiceMsg';
import Message from '../../MessengerChatsPage/Message/Message';
import { Navigate, useNavigate } from 'react-router-dom';
import './CommunitiesLeftPanel.css';

function CommunitiesLeftPanel() {
  const navigate = useNavigate();

  const navigateToChats = () => {
    navigate('/chats'); // Navigate to the About page
  };

    const name = "My Community";
    const msg= "Gholu: Wow! I’m so excited.";
    const time = "9:07 PM ";
    const count = "2";

    const name2 = "Asad’s Community";
    const msg2= "Check this out.";
    const time2 = "20m ago";

    const name3 = "Mahnoor’s Community";
    const msg3= "Voice Message";
    const time3 = "1h ago";

    const name4 = "Bablu’s Community";
    const msg4= "Okay Mate";
    const time4 = "Yesterday";
    const status4 ="Seen";

    const name5 = "Chotu’s Community";
    const msg5= "May be this would work";
    const time5 = "7/29/2023";
    const status5 = "Sent";

  return (
    <div className="col-md-3 p-3" style={{backgroundColor: 'white'}}>
      <Search/>
      <div className="d-flex mt-3">
        <button className="col-md-6 com-btn" onClick={navigateToChats}>Chats</button>
        <button className="col-md-6 chats-btn" >Communities</button>
      </div>
      <div className="chat-list">
        <div className="pt-2 pb-4">
            <p className="my-comm">My Community</p>
            <NewMsg name={name} msg={msg} time={time} count={count} />
        </div>  

        <div className="pt-2">
            <p className="my-comm" style={{marginBottom: 0}}>Joined Communities</p>
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
    </div>
  );
}

export default CommunitiesLeftPanel;
