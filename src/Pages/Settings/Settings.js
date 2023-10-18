import React from 'react';
import SettingsHeader from '../../components/SettingsPage/SettingsHeader/SettingsHeader';
import HomepageNavBar from '../../components/Homepage1/Homepage1Navbar/HomepageNavBar';
import SettingsLeftPanel from '../../components/SettingsPage/SettingsPageLeftPanel/SettingsLeftPanel';
import BasicInfo from '../../components/SettingsPage/BasicInfo/BasicInfo';
import EmailAndWalletConnect from '../../components/SettingsPage/EmailAndWalletConnect/EmailAndWalletConnect';
import AboutMe from '../../components/SettingsPage/AboutMe/AboutMe';
import Skills from '../../components/SettingsPage/Skills/Skills';
import Languages from '../../components/SettingsPage/Languages/Languages';
import Socials from '../../components/SettingsPage/Socials/Socials';
import UploadProfilePic from '../../components/SettingsPage/UploadProfilePic/UploadProfilePic';

function Settings() {
  return (
    <div className="chats">
      <HomepageNavBar/>
      <SettingsHeader/>
      <div className="d-flex" style={{backgroundColor:'#D9D9D9', marginTop: 10}}>
        <SettingsLeftPanel/>
        <div>
            <BasicInfo/>
            <EmailAndWalletConnect/>
            <AboutMe/>
            <Skills/>
            <Languages/>
            <Socials/>
        </div>
        <div className="offset-md-1">
        <UploadProfilePic/>
        </div>
      </div>
    </div>
  );
}

export default Settings;
