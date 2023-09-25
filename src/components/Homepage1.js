import React from "react";
import HomepageNavBar from "./HomepageNavBar";
import HomepageSearchbar from './HomepageSearchbar';
import pp1 from '../Images/pp1.png';
import PostPic from "./PostPic";

const Homepage1 = () => {
    // const profilepic = {pp1};
    const name = 'Mahnoor Maqsood';
    const city = 'Sargodha';
    const country ='Pakistan';
    const time = '1 hr ago';
    const category = 'Post';
    
    return (
    <div style={{overflowX: 'hidden'}}>
      <HomepageNavBar/>
      <HomepageSearchbar/>
      <div style={{backgroundColor: '#e8eaed', paddingTop: 20, marginTop:30, paddingBottom: 20}}>
        <PostPic  profilepicprop = {pp1} nameprop = {name} 
        cityprop ={city} countryprop ={country} timeprop= {time} categoryprop= {category}/>
      </div>
    </div>

    )
  }
  
  export default Homepage1