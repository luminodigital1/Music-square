import React, {useState} from "react";
import search from '../Images/search.png';
import setting from '../Images/setting.png';
import './HomepageSearchbar.css';
import HomepageSearchbar from "./HomepageSearchbar";
import './Homepage2Searchbar.css';

const FindCollabSearchbar = () => {
    const [selectedPM, setSelectedPM] = useState('');

  const handleSelectPMChange = (event) => {
    setSelectedPM(event.target.value);
  };

  const [selectedTZ, setSelectedTZ] = useState('');

  const handleSelectTZChange = (event) => {
    setSelectedTZ(event.target.value);
  };
  
    
    return (
        <div className="row dflex bar">
        <div className="col-md-5 searchbar">
        <div className="input-group border" style={{height: 45, marginTop: -20}}>
                  <input className="form-control border-0 "  
                    style={{borderColor: 'initial', boxShadow: 'none', color: '#889696', borderRadius: 0
                    }}
                      type="text"
                      placeholder="Search"
                      // onChange={handleSearch}
                  />
                  <div style={{height:30, width: 40}}>
                  <img class="img-fluid bg-transparent pt-2 pr-2" 
                    style={{height:25, width: 25, justifyContent: 'center', marginTop:2, cursor: 'pointer'}}
                    src={search}/>
                  </div>
          </div>
        </div>
        <div className="col-md-2">
        <div className="form-group" >
               <select
                  className="form-control dropdown"
                  style={{borderRadius: 0}}
                  // placeholder="Enter your password"
                  id="paymeth"
                  name="paymeth"
                  // value={formData.timeZone}
                  value={selectedPM}
                  onChange={handleSelectPMChange}
                  // required
                >
                <option value="Select Payment Method" >Select Payment Method</option>
                <option value="Payment Method 1">Position 1</option>
                <option value="Payment Method 2">Payment Method 2</option>
                <option value="Payment Method 3">Payment Method 3</option>
                <option value="Payment Method 4">Payment Method 4</option>
            </select>   
          </div>
        </div>
        <div className="col-md-2">
        <div className="form-group">
               <select
                  className="form-control dropdown"
                  style={{borderRadius: 0}}
                  // placeholder="Enter your password"
                  id="timezone"
                  name="timezone"
                  // value={formData.timeZone}
                  value={selectedTZ}
                  onChange={handleSelectTZChange}
                  // required
                >
                <option value="Select Time Zone" >Select Time Zone</option>
                <option value="Time Zone 1">Time Zone 1</option>
                <option value="Time Zone 2">Time Zone 2</option>
                <option value="Time Zone 3">Time Zone 3</option>
                <option value="Time Zone 4">Time Zone 4</option>
            </select>       
          </div>
        </div>
        
          <button className="col-md-1 offset-md-1 searchBtn" style={{marginTop: -20}}>
            Search
          </button>
        
      </div>
    )
  }
  
  export default FindCollabSearchbar