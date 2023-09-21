import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import './SearchBar.css';
import search from '../Images/search.png';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  const handleClick = () => {
    // Define your click behavior here
  };

  return (
    <div className="container">
      <div className="row">
          <div className="col-md-6">
            <p className="fw-bold mb-0 fs-3 mt-4" style={{color: '#FFE500'}}>Welcome to</p>
            <h1 className="fw-bold" style={{fontSize: 50}}>Music Square</h1>
            <p className="mb-5">Enpowering Musicians Worldwide with Blockchain Brillaince</p>

            <div className="input-group border" style={{height: 45}}>
                <input className="form-control border-0"  
                  style={{borderColor: 'initial', boxShadow: 'none', color: '#889696'}}
                    type="text"
                    placeholder="Search for any music service..."
                    onChange={handleSearch}
                />
                <div style={{height:30, width: 40}}>
                <img class="img-fluid bg-transparent pt-2 pr-2" 
                  style={{height:25, width: 25, justifyContent: 'center', marginTop:2, cursor: 'pointer'}}
                  src={search}/>
                </div>
            </div>

          {/* <div className="d-flex mt-4">
              <p className="fw-bold my-1 pr-2">Popular:    </p>
              <button className="mr-2">Hip Hop</button>
              <button className='button-style'>Vocal Artist</button>
              <button className='button-style'>Drummer</button>
              <button className='button-style'>Audio Engineers</button>
          </div> */}

          <div class="btn-toolbar mt-3">
            <p className="fw-bold"
            style={{marginRight: 20}}
            >Popular:    </p>
            <button type="button" class="btn btn-primary btn-sm rounded bg-transparent border
            d-flex align-items-center"
            style={{marginRight: 10, padding:8, height: 30, color: 'GrayText'}}>Hip Hop</button>
            <button type="button"
            class="btn btn-primary btn-sm rounded bg-transparent border
            d-flex align-items-center" 
            style={{marginRight: 10, padding:8,height: 30, color: 'GrayText'}}>Vocal Artist</button>
            <button type="button" 
            class="btn btn-primary btn-sm rounded bg-transparent border
            d-flex align-items-center" 
            style={{marginRight: 10, padding:8,height: 30, color: 'GrayText'}}>Drummer</button>
            <button type="button" 
            style={{color: 'GrayText',height: 30}}
            class="btn btn-primary btn-sm rounded bg-transparent border
            d-flex align-items-center" 
            >Audio Engineers</button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default SearchBar;
