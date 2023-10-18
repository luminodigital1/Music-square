import React from 'react';
import HomepageNavBar from '../../components/Homepage1/Homepage1Navbar/HomepageNavBar';
import ChatsLeftPanel from '../../components/MessengerChatsPage/ChatsLeftPanel/ChatsLeftPanel';
import ChatsRightPanel from '../../components/MessengerChatsPage/ChatsRightPanel/ChatsRightPanel';

function Chats() {
  return (
    <div className="chats">
      <HomepageNavBar/>
      <div className="d-flex" style={{backgroundColor:'#D9D9D9', paddingLeft: 50, marginTop: -50, paddingTop: 20}}>
        <ChatsLeftPanel/>
        <ChatsRightPanel/>
      </div>
    </div>
  );
}

export default Chats;
