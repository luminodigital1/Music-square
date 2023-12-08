import React, {useState} from "react";
import search from '../../../Images/search.png';
import './../../Homepage1/Homepage1Seacrhbar/HomepageSearchbar.css';

const Searchbar = () => {    
    return (
    <div className="row dflex bar">
      <div className="col-md-4 offset-md-4 searchbar" style={{marginTop: 10, paddingBottom: 10}}>
      <div className="input-group border" style={{height: 45, marginTop: -20}}>
                <input className="form-control border-0 "  
                  style={{borderColor: 'initial', boxShadow: 'none', color: '#889696', borderRadius: 0
                  }}
                    type="text"
                    placeholder="Search for topic or question"
                    // onChange={handleSearch}
                />
                <div style={{height:30, width: 40}}>
                <img class="img-fluid bg-transparent pt-2 pr-2" 
                  style={{height:25, width: 25, justifyContent: 'center', marginTop:2, cursor: 'pointer'}}
                  src={search}/>
                </div>
        </div>
      </div>
      
    </div>

    )
  }
  
  export default Searchbar