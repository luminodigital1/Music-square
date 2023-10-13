import React from "react";
import Navbar from "../../components/LandingPage/LandingPageNavbar/HeaderNavbar";
import SearchBar from "../../components/LandingPage/LandingPageWelcome/SearchMusic";
import DisplayStyles from "../../components/LandingPage/RythmRevRewards/DisplayStyles";
import { useState } from 'react';
import SupportedCompanies from "../../components/LandingPage/Companies/SupportedCompanies";
import AboutArtistBuyer from "../../components/LandingPage/AboutArtistBuyer/AboutArtistBuyer";
import ProfileList from '../../HomeScreen/ProfileList';
import VoicesFromPodium from '../../components/LandingPage/VoicesFromPodium/VoicesFromPodium';
import HireToday from '../../components/LandingPage/HireToday/HireToday';
import GetStarted from "../../components/LandingPage/GetStarted/GetStarted";
import ProfileDisplay from "../../components/LandingPage/Profiles/ProfileDisplay";
import arrowRight from '../../Images/arrow-right.png';
import arrowLeft from '../../Images/arrow-left.png';

const LandingPage = () => {
  const [position, setPosition] = useState(0);

  const moveLeft = () => {
    // setPosition(position - 1);
  };

  const moveRight = () => {
    // setPosition(position + 1);
  };

    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);};
    
    return (
    <div style={{overflowX: "hidden"}}>
      <Navbar/>
      <div className="row">
          <SearchBar onSearch={handleSearch} />
          <DisplayStyles/>
      </div>
      <SupportedCompanies/>
      <AboutArtistBuyer/>
      {/* <ProfileList/> */}
      <div className="">
    <div className="d-flex" style={{marginBottom: 5, marginTop: 40}}>
        <div className="col-md-1 offset-md-11">
        <a className=" " style={{}} href='#'>View all</a>
        <img style={{height:20,width: 20}} src={arrowLeft} alt="" onClick={moveLeft}/>
        <img style={{height:20,width: 20}} src={arrowRight} alt="" onClick={moveRight}/>
        </div>
    </div>
    <div className="d-flex" style={{marginLeft: 120}}>
      <div className="p-1 m-3" style={{boxShadow: 'inset 0 0 10px rgba(200, 200, 200, 0.5)'}}>
        <ProfileDisplay/>
      </div>
      <div className="p-2 m-3" style={{boxShadow: 'inset 0 0 10px rgba(200, 200, 200, 0.5)'}}>
        <ProfileDisplay/>
      </div>
      <div className="p-2 m-3" style={{boxShadow: 'inset 0 0 10px rgba(200, 200, 200, 0.5)'}}>
        <ProfileDisplay/>
      </div>
      {/* <div className="p-1 m-3" style={{flex : '2',boxShadow: 'inset 0 0 5px rgba(200, 200, 200, 0.5)'}}>
        <ProfileDisplay/>
      </div> */}
    </div>
      </div>
      <VoicesFromPodium/>
      <HireToday/>
      <GetStarted/>
    </div>

    )
  }
  
  export default LandingPage