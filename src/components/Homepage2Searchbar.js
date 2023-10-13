import React, {useState} from "react";
import search from '../Images/search.png';
import setting from '../Images/setting.png';
import '../components/Homepage1/Homepage1Seacrhbar/HomepageSearchbar.css';
import HomepageSearchbar from "./Homepage1/Homepage1Seacrhbar/HomepageSearchbar";
import './Homepage2Searchbar.css';

const Homepage2Searchbar = () => {
  
    
    return (
    <div>
        <HomepageSearchbar/>
        <div class="btn-toolbar mt-4 mb-4 d-flex">
            <p className="popular2"
            >Popular    </p>
            <button type="button" class="col-md-1 searchopt">Hip Hop</button>
            <button type="button"
            class="col-md-1 searchopt"
            >Vocal Artist</button>
            <button type="button" 
            class="col-md-1 searchopt">Drummer</button>
            <button type="button" 
            class="col-md-1 searchopt" 
            >Audio Engineers</button>
            <button type="button" class="col-md-1 searchopt">Hip Hop</button>
            <button type="button"
            class="col-md-1 searchopt"
            >Vocal Artist</button>
            <button type="button" 
            class="col-md-1 searchopt">Drummer</button>
            <button type="button" 
            class="col-md-1 searchopt" 
            >Audio Engineers</button>
            <button type="button" class="col-md-1 searchopt">Hip Hop</button>
            
          </div>      
    </div>

    )
  }
  
  export default Homepage2Searchbar