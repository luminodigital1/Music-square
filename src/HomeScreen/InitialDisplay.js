import React from "react";
import Navbar from "./HeaderNavbar";
import SearchBar from "./SearchMusic";
import DisplayStyles from "./DisplayStyles";
import { useState } from 'react';
import SupportedCompanies from "./SupportedCompanies";
import AboutArtistBuyer from "./AboutArtistBuyer";
import ProfileList from './ProfileList';
import VoicesFromPodium from './VoicesFromPodium';
import HireToday from './HireToday';
import GetStarted from "./GetStarted";

const InitialDisplay = () => {

    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);};
    
    return (
    <div style={{overflowX: 'hidden'}}>
      <Navbar/>
      <div className="row">
          <SearchBar onSearch={handleSearch} />
          <DisplayStyles/>
      </div>
      <SupportedCompanies/>
      <AboutArtistBuyer/>
      <ProfileList/>
      <VoicesFromPodium/>
      <HireToday/>
      <GetStarted/>
    </div>

    )
  }
  
  export default InitialDisplay