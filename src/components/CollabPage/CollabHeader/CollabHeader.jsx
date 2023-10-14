// import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import './CollabHeader.css';
// import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';

const CollabHeader = () => {
  const navigate = useNavigate();

  const navigateToCollabComplete = () => {
    navigate('/collabcompleted'); // Navigate to the About page
  };
  return <div className="collab__header">
    <h2 className="collab__heading">Collab Status</h2>
    <div className="submit__button" onClick={navigateToCollabComplete}>
      <h3>Collab Complete</h3>
    </div>
  </div>;
};

export default CollabHeader;
