import React from "react";
import Navbar from "./HeaderNavbar";
import SearchBar from "./SearchMusic";
import DisplayStyles from "./DisplayStyles";
import { useState } from 'react';
import SupportedCompanies from "./SupportedCompanies";
import AboutArtistBuyer from "./AboutArtistBuyer";

const InitialDisplay = () => {
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);};
    
    return (
    <div>
      <Navbar/>
      <div style={{display: 'flex'}}>
        <SearchBar onSearch={handleSearch} />
        <DisplayStyles/>
        </div>
        <SupportedCompanies/>
        <AboutArtistBuyer/>
    </div>
    )
  }
  
  export default InitialDisplay