import React, {useState} from "react";
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
import HomepageNavBar from "../../components/Homepage1/Homepage1Navbar/HomepageNavBar";
import HomepageSearchbar from '../../components/Homepage1/Homepage1Seacrhbar/HomepageSearchbar';
import pp1 from '../../Images/pp1.png';
import ceo from '../../Images/CEO.png';
import pp3 from '../../Images/pp3.png';
import PostPic from "../../components/Homepage1/Postpics/PostPic";
import PostAudio from "../../components/Homepage1/PostAudio/PostAudio";

const Homepage1 = () => {

    const name = 'Mahnoor Maqsood';
    const city = 'Sargodha';
    const country ='Pakistan';
    const time = '1 hr ago';
    const category = 'Post';

    const name2 = 'Sean Kim';
    const city2 = 'Seoul';
    const country2 ='South Korea';
    const time2 = '1 hr ago';
    const category2 = 'Collab';

    const name3 = 'Asad Ali Akbar';
    const city3 = 'Sargodha';
    const country3 ='Pakistan';
    const time3 = '1 hr ago';
    const category3 = 'Post';
    
    return (
    <div style={{overflowX: 'hidden'}}>
      <HomepageNavBar/>
      <HomepageSearchbar/>
      <div style={{backgroundColor: '#e8eaed', paddingTop: 20, marginTop:30, paddingBottom: 20}}>
        <PostPic  profilepicprop = {pp1} nameprop = {name} 
        cityprop ={city} countryprop ={country} timeprop= {time} categoryprop= {category}/>
        <PostAudio  profilepicprop = {ceo} nameprop = {name2} 
        cityprop ={city2} countryprop ={country2} timeprop= {time2} categoryprop= {category2}/>
        <PostPic  profilepicprop = {pp3} nameprop = {name3} 
        cityprop ={city3} countryprop ={country3} timeprop= {time3} categoryprop= {category3}/>
      </div>
    </div>

    )
  }
  
  export default Homepage1