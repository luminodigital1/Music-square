import React from 'react';
import SettingsHeader from '../../components/SettingsPage/SettingsHeader/SettingsHeader';
import HomepageNavBar from '../../components/Homepage1/Homepage1Navbar/HomepageNavBar';
import SettingsLeftPanel from '../../components/SettingsPage/SettingsPageLeftPanel/SettingsLeftPanel';
import NotificationSetting from '../../components/NotificationSettingPage/NotificationSetting';

function NotifSettingPage() {
  return (
    <div className="chats">
      <HomepageNavBar/>
      <SettingsHeader heading='NOTIFICATIONS SETTING' />
      <div className="d-flex" style={{backgroundColor:'#D9D9D9', marginTop: 10}}>
        <SettingsLeftPanel/>
        <div>
            <NotificationSetting />
        </div>
      </div>
    </div>
  );
}

export default NotifSettingPage;
