// import React, {useState} from 'react'
// import MyCollabMusicPlayer from '../MyCollabs/MyCollabMusicPlayer/MyCollabMusicPlayer'
// import CollabDetails from '../../Shared/CollabDetails/CollabDetails'

// const MyPosts = () => {

//   return (
//     <div className="my__collabs__container">
//       <div className="my__collabs__main">
//         <MyCollabMusicPlayer />
//         <CollabDetails />
//       </div>
//     </div>
//   )
// }

// export default MyPosts

import React, {useState} from 'react'
import MyCollabMusicPlayer from '../MyCollabs/MyCollabMusicPlayer/MyCollabMusicPlayer'
import CollabDetails from '../../Shared/CollabDetails/CollabDetails'
import PostPictues from '../../../UserProfilePage/MyPostsPage/PostPictures/PostPictures';
import pp1 from '../../../../Images/pp1.png';
import pp2 from '../../../../Images/pp2.png';
import PostMusic from '../../../UserProfilePage/MyPostsPage/PostMusic/PostMusic';
import PostVideo from '../../../UserProfilePage/MyPostsPage/PostVideos/PostVideo';

const MyPosts = () => {
  const name = 'Sean Kim';
    const city = 'Sargodha';
    const country ='Pakistan';
    const time = '1 hr ago';
    // const category = 'Post';

    const name2 = 'Sean Kim';
    const city2 = 'Seoul';
    const country2 ='South Korea';
    const time2 = '1 hr ago';
    const category2 = 'Collab';

    const name3 = 'Sean Kim';
    const city3 = 'Sargodha';
    const country3 ='Pakistan';
    const time3 = '1 hr ago';
    // const category3 = 'Post';

  return (
    <div className="my__collabs__container">
      <div className="my__collabs__main">
        <PostPictues profilepicprop = {pp1} nameprop = {name} 
        cityprop ={city} countryprop ={country} timeprop= {time}/>
        <PostMusic profilepicprop = {pp2} nameprop = {name2} 
        cityprop ={city2} countryprop ={country2} timeprop= {time2} />
        <PostVideo profilepicprop = {pp1} nameprop = {name3} 
        cityprop ={city3} countryprop ={country3} timeprop= {time3} />
        {/* <MyCollabMusicPlayer /> */}
        {/* <CollabDetails /> */}
      </div>
    </div>
  )
}

export default MyPosts