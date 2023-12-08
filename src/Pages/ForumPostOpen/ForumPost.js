import React from 'react';
import CollabStatusPageHeader from '../../components/CollabStatusPage/CollabStatusPageHeader/CollabStatusPageHeader';
import Homepage2Searchbar from '../../components/Homepage2Searchbar';
import Forum from '../../components/CommunityForumPage/Forum/Forum';
import HomepageSearchbar from '../../components/Homepage1/Homepage1Seacrhbar/HomepageSearchbar';
import FindCollabSearchbar from '../../components/FindCollabPage/FindCollabSearchbar/FindCollabSearchbar';
import SearchBar from '../../components/LandingPage/LandingPageWelcome/SearchMusic';
import Searchbar from '../../components/CommunityForumPage/SearchBar/Searchbar';
import StartDiscussion from '../../components/CommunityForumPage/StartDiscussion/StartDiscussion';
import HotTopics from '../../components/CommunityForumPage/StartDiscussion/HotTopics/HotTopics';
import ForumPostOpen from '../../components/ForumPostOpenPage/ForumPostOpen';

function ForumPost() {
  return (
    <div className="chats">
      <CollabStatusPageHeader />
      <div style={{width: '100%', height: '1px', backgroundColor: '#ccc', marginBottom: 30}}></div>
        <Searchbar/>
      <div className="d-flex" style={{backgroundColor:'#f2f2f2', marginTop: 10}}>
        <Forum/>
        <div>
            <ForumPostOpen/>
            {/* <BasicInfo/>
            <EmailAndWalletConnect/>
            <AboutMe/>
            <Skills/>
            <Languages/>
            <Socials/> */}
        </div>
        <div className="">
            <HotTopics/>
        </div>
      </div>
    </div>
  );
}

export default ForumPost;
