import React, {useState, useRef} from 'react';
// import './Collaborators.css';

function TimePeriod() {

  return (
    <div className="col-md-8 upload-container" style={{marginTop: 20, paddingBottom: 30}}>
      <div className="d-flex">
        <p className="upload-img" >Time period</p>
      </div>
      <p className="enhnc-desp">Preferred duration for the fulfillment of the task being posted.</p>

        <div className=" col-md-4" style={{ display: 'flex', alignItems: 'center' }}>
            <input type="number"
            placeholder="Enter Time Period" 
            className="border border-grey rounded" 
            style={{height: 40, fontFamily: 'GilroyLight'}} />
        </div> 
    </div>
  );
}

export default TimePeriod;
