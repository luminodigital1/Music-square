// import ProfileDetails from "../../components/ProfilePage/ProfileDetails/ProfileDetails";
// import ProfileTabs from "../../components/ProfilePage/ProfileTabs/ProfileTabs";
// import "./Profile.css";

// const Profile = () => {
//   return (
//     <div className="profile__container__main">
//       {/* Profile Main */}
//       <div className="profile__main">
//         {/* Cover Photo Container */}
//         <div className="cover__photo">
//           <div className="profile__main__container">
//             <div className="profile__main__left">
//               <ProfileDetails />
//             </div>
//             <div className="profile__main__right">
//               <ProfileTabs />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Something Else */}
//       <div className="something__else"></div>
//     </div>
//   );
// };

// export default Profile;

// =============

import CollabHeader from "../../components/CollabPage/CollabHeader/CollabHeader";
import CollabStatusPageHeader from "../../components/CollabStatusPage/CollabStatusPageHeader/CollabStatusPageHeader";
import ProfileDetails from "../../components/ProfilePage/ProfileDetails/ProfileDetails";
import ProfileTabs from "../../components/ProfilePage/ProfileTabs/ProfileTabs";
import "./Profile.css";
import HomepageNavBar from "../../components/Homepage1/Homepage1Navbar/HomepageNavBar";

const Profile = () => {
  return (
    <div>
        <HomepageNavBar />
    <div className="profile__container__main" style={{marginTop: -50}}>      
      {/* Profile Main */}
      <div className="profile__main">
        {/* Cover Photo Container */}
        <div className="cover__photo"> </div>
        <div className="profile__main__container">
          <div className="profile__main__left">
            <ProfileDetails />
          </div>
          <div className="profile__main__right">
            <ProfileTabs />
          </div>
        </div>
      </div>

      {/* Something Else */}
      <div className="something__else"></div>
    </div>
    </div>
  );
};

export default Profile;
