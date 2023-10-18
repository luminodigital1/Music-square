import React from 'react';
import search from '../../../Images/search.png';
import './Search.css';
function Search() {
  return (
    <div className="d-flex p-2 border border-grey search">
      <input type='text' placeholder='Search'/>
      <img src={search} alt=""/>
    </div>
  );
}

export default Search;
