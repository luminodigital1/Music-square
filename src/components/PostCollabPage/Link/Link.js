import React, {useState, useRef} from 'react';
import link from '../../../Images/link.png';
// import './Collaborators.css';

function AddLink() {

  return (
    <div className="col-md-8 upload-container" style={{marginTop: 20, paddingBottom: 30}}>
      <div className="d-flex">
        <p className="upload-img" >Link</p>
      </div>
      <p className="enhnc-desp">URL of the website</p>

        <div className="d-flex col-md-8" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="p-2" style={{backgroundColor: 'grey', borderTopLeftRadius: 4, borderBottomLeftRadius: 4}}>
                <img className="" src={link} alt="" />
            </div>
            <input type="text"
            placeholder="www.musicwebsite.com" 
            className="border border-grey" 
            style={{height: 40, fontFamily: 'GilroyLight',
            borderTopRightRadius: 4, borderBottomRightRadius: 4
            }} />
        </div> 
    </div>
  );
}

export default AddLink;
