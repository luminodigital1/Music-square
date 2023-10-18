import React from 'react';
import HomepageNavBar from '../../components/Homepage1/Homepage1Navbar/HomepageNavBar';
import PostCollabHeader from '../../components/PostCollabPage/PostCollabHeader/PostCollabHeader';
import Upload from '../../components/PostCollabPage/Upload/Upload';
import Title from '../../components/PostCollabPage/Title/Title';
import Team from '../../components/PostCollabPage/Team/Team';
import Collaborators from '../../components/PostCollabPage/Collaborators/Collaborators';
import CollaborationType from '../../components/PostCollabPage/CollaborationType/CollaborationType';
import Compensation from '../../components/PostCollabPage/Compensation/Compensation';
import Description from '../../components/PostCollabPage/Description/Description';
import TimePeriod from '../../components/PostCollabPage/TimePeriod/TimePeriod';
import AddLink from '../../components/PostCollabPage/Link/Link';

function PostCollab() {
  return (
    <div className="post-collab">
      <HomepageNavBar/>
      <PostCollabHeader/>
      <div className="" style={{backgroundColor: '#ccc', paddingTop: 20, paddingBottom: 20, marginTop: 10}}>
        <div className="offset-md-3">
            <Upload/>
            <Title/>
            <Team/>
            <Collaborators/>
            <CollaborationType/>
            <Compensation/>
            <Description/>
            <TimePeriod/>
            <AddLink/>
        </div>
      </div>
    </div>
  );
}

export default PostCollab;
