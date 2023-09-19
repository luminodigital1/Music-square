import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';
import search from '../Images/search.png';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className='container1'>
        <p className='p1' style={{marginBottom:0, paddingBottom:0}}>Welcome to</p>
        <h1 style={{marginTop:0, marginBottom:0, padding:0}}>Music Square</h1>
        <p style={{marginTop:0, paddingTop:0}}>Enpowering Musicians Worldwide with Blockchain Brillaince</p>
        <div className="search-bar">
            
            <input
                type="text"
                placeholder="Search for any music service"
                onChange={handleSearch}
            />
            <img src={search} className="search-icon" />
        </div>
        <div className='button-Container'>
            <p className='p2'>Popular:    </p>
            <button className='button-style'>Hip Hop</button>
            <button className='button-style'>Vocal Artist</button>
            <button className='button-style'>Drummer</button>
            <button className='button-style'>Audio Engineers</button>
        </div>
    </div>
  );
};

export default SearchBar;
