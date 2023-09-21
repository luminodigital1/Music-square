import React from "react";
import Navbar from "./HeaderNavbar";
import SearchBar from "./SearchMusic";
import DisplayStyles from "./DisplayStyles";
import { useState } from 'react';
import SupportedCompanies from "./SupportedCompanies";
import AboutArtistBuyer from "./AboutArtistBuyer";
import ProfileList from './ProfileList';

const InitialDisplay = () => {

    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);};
    
    return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <SearchBar onSearch={handleSearch} />
          <DisplayStyles/>
        </div>
      </div>
      <SupportedCompanies/>
      <AboutArtistBuyer/>
      <ProfileList/>
    </div>

    )
  }
  
  export default InitialDisplay