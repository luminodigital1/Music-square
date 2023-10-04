import React, {useState} from "react";
import HomepageNavBar from "./HomepageNavBar";
import './CollabDetails.css'
import CollabDetailsLeftPanel from "./CollabDetailsLeftPanel";
import CollabDetailsRightPanel from "./CollabDetailsRightPanel";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ApplyForCollab from "./ApplyForCollab";

const CollabDetails = () => {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => {
    setIsFormOpen(true);
  };
    
    return (
    <div style={{overflowX: 'hidden'}}>
      <HomepageNavBar/>
      <div className="d-flex" style={{backgroundColor: "white", marginTop: -20, marginBottom: 20}}>
        <button className="col-md-1 backBtn">Back</button>
        <Popup trigger={<button className="col-md-1 offset-md-9 applyBtn" onClick={openForm}
        >Apply</button>} modal closeOnDocumentClick ={false}>
          <ApplyForCollab/>
        </Popup> 
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