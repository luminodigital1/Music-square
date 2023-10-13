import React from "react";
import y1 from '../../../Images/y1.png';
import y4 from '../../../Images/y4.png';
import dot from '../../../Images/dot.png';
import location from '../../../Images/location.png';
import './CollabResult.css';
import { Navigate, useNavigate } from 'react-router-dom';

const CollabResult = () => {
    const navigate = useNavigate();

    const navigateToCD = () => {
        navigate('/collabdetails'); // Navigate to the About page
    };
    
    return (
        <div>
    <div className="container border border-grey rounded p-2" style={{overflowX: 'hidden', backgroundColor: "white"}}>
      <div className="">
        <div className="d-flex">
            <img className="res-pp" src={y1} alt="" height="60" width="60"/>
            <div className="container">
                <p className="res-title">Flashing Lights</p>
                <div className="d-flex">
                    <p className="res-name">Sean Kim</p>
                    <img className="sep-dot" src={dot} alt="" height="5" width="5"/>
                    <p className="tag-1">Full-time</p>
                    <img className="sep-dot" src={dot} alt="" height="5" width="5"/>
                    <p className="tag-2">Revenue Share</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="d-flex">
                    <img src={location} alt="" height="16" width="16" style={{marginTop: 5, marginRight: 5}}/>
                    <p className="res-tz">Pakistan (GMT+5)</p>
                </div>
                <p className="offset-md-4 res-time">Posted 5 min ago</p>
            </div>
        </div>
        <p style={{fontFamily: 'GilroyBold', marginBottom: 3}}>Required Positions </p>
        <div className="d-flex">
            <div className="d-flex">
                <p className="type1 p-1">2 Guitarists</p>
                <p className="ratio1 p-1">10%</p>
            </div>
            <div className="d-flex">
                <p className="p-1 type2">3 Composers</p>
                <p className="p-1 ratio2">5%</p>
            </div>
        </div>
        <p className="note">We are seeking talented and highly motivated artists to join our growing team.
             The ideal candidate will have a strong portfolio of work and a passion for 
             creating amazing and appealing music.</p>
      </div>
      <hr color="grey" style={{marginLeft:-10, marginRight: -10}}/>
      <div className="d-flex col-md-5 offset-md-7">
        <button className="detailBtn" onClick={navigateToCD}>View Details</button>
        <button className="applyBtn" onClick={navigateToCD}>Apply</button>
      </div>
    </div>


    <div className="container border border-grey rounded p-2" style={{overflowX: 'hidden', 
    backgroundColor: "white", marginTop: 30}}>
    <div className="">
    <div className="d-flex">
        <img className="res-pp" src={y4} alt="" height="60" width="60"/>
        <div className="container">
            <p className="res-title">LOVE SCENARIO</p>
            <div className="d-flex">
                <p className="res-name">Mano Billi</p>
                <img className="sep-dot" src={dot} alt="" height="5" width="5"/>
                <p className="tag-1">Full-time</p>
                <img className="sep-dot" src={dot} alt="" height="5" width="5"/>
                <p className="tag-2">Hourly Payment</p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="d-flex">
                <img src={location} alt="" height="16" width="16" style={{marginTop: 5, marginRight: 5}}/>
                <p className="res-tz">Pakistan (GMT+5)</p>
            </div>
            <p className="offset-md-4 res-time">Posted 5 min ago</p>
        </div>
    </div>
    <p style={{fontFamily: 'GilroyBold', marginBottom: 3}}>Required Positions </p>
    <div className="d-flex">
        <div className="d-flex">
            <p className="type1 p-1">2 Guitarists</p>
            <p className="ratio1 p-1">$20/Hr</p>
        </div>
        <div className="d-flex">
            <p className="p-1 type2">3 Composers</p>
            <p className="p-1 ratio2">$25/Hr</p>
        </div>
    </div>
    <p className="note">We are seeking talented and highly motivated artists to join our growing team.
        The ideal candidate will have a strong portfolio of work and a passion for 
        creating amazing and appealing music.</p>
    </div>
    <hr color="grey" style={{marginLeft:-10, marginRight: -10}}/>
    <div className="d-flex col-md-5 offset-md-7">
    <button className="detailBtn" onClick={navigateToCD}>View Details</button>
    <button className="applyBtn" onClick={navigateToCD}>Apply</button>
    </div>
    </div>
</div>

    )
  }
  
  export default CollabResult