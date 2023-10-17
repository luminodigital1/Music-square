import React from "react";
import MyCollabMusicPlayer from "../MyCollabs/MyCollabMusicPlayer/MyCollabMusicPlayer";
import MyMusicTab from '../../../UserProfilePage/MyMusicPage/MyMusicTab';
import pp3 from '../../../../Images/pp3.png';

const MyMusic = () => {
    const name = 'Sean Kim';
    const city = 'Seoul';
    const country ='South Korea';
    const time = '1 hr ago';
  return (
    <div style={{ marginTop: "30px" }}>
      {/* <MyCollabMusicPlayer status={0} /> */}
        <MyMusicTab profilepicprop = {pp3} nameprop = {name} 
        cityprop ={city} countryprop ={country} timeprop= {time}/>
      <div style={{ backgroundColor: '#fff', padding: '20px'}}></div>
    </div>
  );
};

export default MyMusic;
