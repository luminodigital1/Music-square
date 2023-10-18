import { useState } from "react";
import "../../CollabPage/Activities/Activities.css";
import ActivityHeader from "../../CollabPage/Activities/ActivityHeader/ActivityHeader";
import ActivityStatus from "../../CollabPage/Activities/ActivityStatus/ActivityStatus";
import ReceiverMessage from "../../CollabPage/Activities/ReceiverMessage/ReceiverMessage";
import SenderMessage from "../../CollabPage/Activities/SenderMessage/SenderMessage";
import TypeMessage from "../../CollabPage/Activities/TypeMessage/TypeMessage";
import CommReceiverMessage from "../CommReceiverMessage/CommReceiverMessage";

import pp2 from '../../../Images/pp2.png';
import pp4 from '../../../Images/pp4.png';
import pp5 from '../../../Images/pp5.png';
import pp6 from '../../../Images/pp6.png';
import pp7 from '../../../Images/pp7.png';
import CommSenderMessage from "../CommSenderMessage/CommSenderMessage";
import CommSenderAudio from "../CommSenderAudio/CommSenderAudio";

const CommChats = () => {
  const [showActivity, setShowActivity] = useState(true);

  return (
    <div className="activities__container" style={{marginTop: 5}}>
      {/* <ActivityHeader
        showActivity={showActivity}
        setShowActivity={setShowActivity}
      /> */}

      {/* Main Container */}
      {showActivity && (
        <div className="activities__main">
          <p style={{textAlign: "center", color:"#ccc", fontFamily: "GilroyLight"}}>Today</p>
          <CommReceiverMessage
          pic={pp2}
            date="9:07 PM You"
            message="Hi there! I heard you're looking for a musician. I'd love to collaborate with you! What kind of project are you working on?"
            isLove={true}
            isLike={true}
            loveCount= "12"
            likeCount = "24"
          />
          <CommSenderMessage
            pic={pp4}
            date="Mahnoor Maqsood 9:07 PM "
            message="Wonderful!!!! 💕"
            isLove={false}
          />
          
          <CommSenderMessage
            pic={pp5}
            date="Asad Ali 9:07 PM "
            message="I will be there to capture this experience. 😃 "
            isLove={false}
          />

          <CommSenderAudio
            pic ={pp6}
            date="Luffy de Monkey 9:07 PM "
            isLove={false}
          />

          <p className="offset-md-5" style={{backgroundColor: "#EFEFF0",
          color:"#717171",
          fontSize: 12,
          fontFamily: "GilroyLight",
          display: "inline-block",
          padding: 2,
          paddingLeft:0,
          paddingRight:0,
          
        
        }} >2 unread message</p>

          <CommSenderMessage
            pic={pp7}
            date="Gholu Bacha 9:07 PM "
            message="That’s great "
            moreMessages= {["Wow! I’m so excited."]}
            isLove={false}
          />

          {/* Type Message  */}
          <TypeMessage />
        </div>
      )}
    </div>
  );
};

export default CommChats;
