import React from 'react';
import CommunitiesHeader from '../CommunitiesHeader/CommunitiesHeader';
import CommChats from '../CommChats/CommChats';

function CommunitiesRightPanel() {
  return (
    <div className="col-md-8 " style={{ marginLeft: 10}}>
      <CommunitiesHeader/>
      {/* <MyChats/> */}
      <CommChats/>
    </div>
  );
}

export default CommunitiesRightPanel;
