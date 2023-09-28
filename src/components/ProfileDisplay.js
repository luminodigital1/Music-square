import React from "react";
import propic from '../Images/ProfilePic.png';
import cupblue from '../Images/cup-blue.png';
import bag from '../Images/archive-add.png';
import starblack from '../Images/starblack.png';
import './ProfileDisplay.css';

const ProfileDisplay = () => {
    
    return (
        <div>
    <div className="col-md-12 p-2" style={{overflowX: 'hidden', backgroundColor: "white"}}>
      <div className="">
        <div className="d-flex">
            <img src={propic} alt="" height="50" width="50"/>
            <div>
                <p className="propicname">Sean Kim</p>
                <img className="cup" src={cupblue} alt="" height="20" width="20" />
            </div>
            <img className="col-md-1 offset-md-6" src={bag} alt="" height="30" width="20"/>
        </div>
        <div className="skillcontainer" style={{display: "flex"}}>
            <p className="skill1">Guitarist</p>
            <p className="skill2">Music Production</p>
            <p className="skill3">Luthier</p>
            
        </div>
        <div className="" style={{display: "flex"}}>
            <p className="skill4">Improvisation</p>
            <p className="skill5">Composer</p>            
        </div>
        <div className="d-flex" style={{marginRight:5}}>
            <div className="col-md-4 border border-grey">
                <p className="p-title">Experience</p>
                <p className="p-option">2+ Years</p>
            </div>
            <div className="col-md-4 border border-grey">
                <p className="p-title">Work Type</p>
                <p className="p-option">Full Time</p>
            </div>
            <div className="col-md-4 border border-grey">
                <p className="p-title">Time Zone</p>
                <p className="p-option">Paris (UTC+2)</p>
            </div>
        </div>

        <div className="d-flex mt-2" style={{marginRight:5}}>
            <p className="p-option" style={{fontSize: 16}}>From $165</p>
            <p className="p-title" style={{marginTop: -15}}>/hour</p>
            <div className="d-flex col-md-2 offset-md-5">
                <img src={starblack} alt="" height="17" width="18" style={{marginLeft: 25, marginTop: 3}}/>
                <p className="p-option" style={{fontSize: 16}}>4.5</p>
                <p className="p-title" style={{marginTop: -15}}>(12)</p>
            </div>
        </div>
      </div>
    </div>
    <div className="col-md-12 p-2" style={{marginTop: 2, backgroundColor: "white"}}>
        <div className="d-flex row align-items-center justify-content-center">
            <button className="col-md-5 pt-2 pb-2 detailsBtn rounded">View Details</button>
            <button className="col-md-5 pt-2 pb-2 collabBtn rounded">Collab now</button>
        </div>
    </div>
    </div>

    )
  }
  
  export default ProfileDisplay