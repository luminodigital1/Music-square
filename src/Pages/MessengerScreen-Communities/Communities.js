import React from 'react';
import HomepageNavBar from '../../components/Homepage1/Homepage1Navbar/HomepageNavBar';
import CommunitiesLeftPanel from '../../components/MessengerCommunitiesPage/CommunitiesLeftPanel/CommunitiesLeftPanel';
import CommunitiesRightPanel from '../../components/MessengerCommunitiesPage/CommunitiesRightPanel/CommunitiesRightPanel';

function Communities() {
  return (
    <div className="chats">
      <HomepageNavBar/>
      <div className="d-flex" style={{backgroundColor:'#D9D9D9', paddingLeft: 50, marginTop: -50, paddingTop: 20}}>
        <CommunitiesLeftPanel/>
        <CommunitiesRightPanel/>
      </div>
    </div>
  );
}

export default Communities;
