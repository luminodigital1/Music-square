import React, {useState} from "react";
import search from '../../../Images/search.png';
import setting from '../../../Images/setting.png';
import './HomepageSearchbar.css';

const HomepageSearchbar = () => {
  const [selectedPos, setSelectedPos] = useState('');

  const handleSelectPosChange = (event) => {
    setSelectedPos(event.target.value);
  };

  const [selectedGenre, setSelectedGenre] = useState('');

  const handleSelectGenreChange = (event) => {
    setSelectedGenre(event.target.value);
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
                id="position"
                name="position"
                // value={formData.timeZone}
                value={selectedPos}
                onChange={handleSelectPosChange}
                // required
              >
              <option value="Select Position" >Select Position</option>
              <option value="Position 1">Position 1</option>
              <option value="Position 2">Position 2</option>
              <option value="Position 3">Position 3</option>
              <option value="Position 4">Position 4</option>
          </select>   
        </div>
      </div>
      <div className="col-md-2">
      <div className="form-group">
             <select
                className="form-control dropdown"
                style={{borderRadius: 0}}
                // placeholder="Enter your password"
                id="genre"
                name="genre"
                // value={formData.timeZone}
                value={selectedGenre}
                onChange={handleSelectGenreChange}
                // required
              >
              <option value="Select Genre" >Select Genre</option>
              <option value="Genre 1">Genre 1</option>
              <option value="Genre 2">Genre 2</option>
              <option value="Genre 3">Genre 3</option>
              <option value="Genre 4">Genre 4</option>
          </select>       
        </div>
      </div>
      <div className="col-md-1 setting" style={{width: 40, marginTop: -20}}>
        <img src={setting} alt="" width="30" height="30"/>
      </div>
        <button className="col-md-1 searchBtn" style={{marginTop: -20}}>
          Search
        </button>
      
    </div>

    )
  }
  
  export default HomepageSearchbar