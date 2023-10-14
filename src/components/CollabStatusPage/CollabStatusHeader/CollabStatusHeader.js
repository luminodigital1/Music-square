import React, { useState } from "react";
import '../../CollabPage/CollabHeader/CollabHeader.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CollabStatusClbSbm from "../../../Pages/CollabStatusClbSbm/CollabStatusClbSbm";
import { Navigate, useNavigate } from 'react-router-dom';

const CollabStatusHeader = () => {
  const navigate = useNavigate();

  const navigateToCollabStatusDs = () => {
    navigate('/collabstatusds'); // Navigate to the About page
  };


  return <div className="collab__header">
    <h2 className="collab__heading">Collab Status</h2>
    <div className="d-flex">
      <div className="submit__draft__button" onClick={navigateToCollabStatusDs}>
        <h3>Submit Draft</h3>
      </div>

      <Popup trigger={
        <div className="submit__button">
        <h3>Submit Collab</h3>
      </div>
      } modal
      closeOnDocumentClick = {false}
      >
      {close => (
        <div>
          <CollabStatusClbSbm/>
          <button className="close" style={{
          position: "absolute",
          top: 7,
          right: 15,
          border: 0,
          backgroundColor: "transparent"
        }}  onClick={close}>
          <span style={{fontSize: 24}}> &times; </span>
          </button>
        </div>
      )}
    </Popup>
  </div>
    
  </div>;
};

export default CollabStatusHeader;
