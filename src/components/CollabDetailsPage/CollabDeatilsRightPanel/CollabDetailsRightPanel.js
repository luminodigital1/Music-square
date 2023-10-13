import React from "react";
import '../../../Pages/CollabDetails/CollabDetails.css'
import person from '../../../Images/PersonPic.png';
import line from '../../../Images/v-line.png';
import star from '../../../Images/star-yellow.png';
import more from '../../../Images/more.png';
import './CollabDetailsRightPanel.css';

const CollabDetailsRightPanel = () => {
    
    return (
    <div style={{overflowX: 'hidden'}}>
      <div className="container border border-grey text-center mx-auto" style={{backgroundColor: "white", marginTop: 20, paddingBottom: 20}}>
        <img src={person} height="140" width="150" style={{marginTop: 20}}/>
        <p className="person-name">Sean Kim</p>
        <div className="d-flex justify-content-center text-center mx-auto">
            <p className="person-info">@seankimce019</p>
            <img className="v-line" src={line} alt=""/>
            <p className="person-info">South Korea (GMT+5)</p>
        </div>
        <div className="d-flex justify-content-center text-center mx-auto">
            <img src={star} alt="" height="20" width="20" />
            <img src={star} alt="" height="20" width="20" />
            <img src={star} alt="" height="20" width="20" />
            <img src={star} alt="" height="20" width="20" />
            <img src={star} alt="" height="20" width="20" />
            <p className="person-info">5(124)</p>
        </div>
        <div className="d-flex justify-content-center text-center mx-auto">
            <button className="contact-btn">Contact me</button>
            <img className="more-option" src={more} alt=""/>
        </div>
        <table className="d-flex justify-content-center text-center mx-auto"
         style={{border: 'none', marginTop: 20}}>
            <tbody>
                <tr>
                    <td className="left-cell">Completed projects</td>
                    <td className="right-cell">23</td>
                </tr>
                <tr>
                    <td className="left-cell">Project completion rate</td>
                    <td className="right-cell">88%</td>
                </tr>
                <tr>
                    <td className="left-cell">Date of last project</td>
                    <td className="right-cell">12th Feb, 2023</td>
                </tr>
                <tr>
                    <td className="left-cell">Global Ranking</td>
                    <td className="right-cell">1235th</td>
                </tr>
            </tbody>
        </table>

        <p className="memberssince">MEMBER SINCE : AUG 2, 2023</p>
      </div>
    </div>

    )
  }
  
  export default CollabDetailsRightPanel