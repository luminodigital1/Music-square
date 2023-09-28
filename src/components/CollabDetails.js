import React from "react";
import HomepageNavBar from "./HomepageNavBar";
import './CollabDetails.css'
import CollabDetailsLeftPanel from "./CollabDetailsLeftPanel";
import CollabDetailsRightPanel from "./CollabDetailsRightPanel";

const CollabDetails = () => {
    
    return (
    <div style={{overflowX: 'hidden'}}>
      <HomepageNavBar/>
      <div className="d-flex" style={{backgroundColor: "white", marginTop: -20, marginBottom: 20}}>
        <button className="col-md-1 backBtn">Back</button>
        <button className="col-md-1 offset-md-9 applyBtn">Apply</button>
      </div>
      <div className="d-flex" style={{backgroundColor: '#e8eaed'}}>
        <div className="col-md-8" style={{marginLeft: 50}}>
            <CollabDetailsLeftPanel/>
        </div>
        <div className="col-md-3" style={{marginLeft: 20, marginRight: 50}}>
            <CollabDetailsRightPanel/>
        </div>
      </div>
    </div>

    )
  }
  
  export default CollabDetails