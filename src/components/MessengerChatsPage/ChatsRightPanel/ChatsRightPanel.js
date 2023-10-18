import React from 'react';
import ChatsHeader from '../ChatsHeader/ChatsHeader';
import MyChats from '../MyChats/MyChats';

function ChatsRightPanel() {
  return (
    <div className="col-md-8 " style={{ marginLeft: 10}}>
      <ChatsHeader/>
      <MyChats/>
    </div>
  );
}

export default ChatsRightPanel;
