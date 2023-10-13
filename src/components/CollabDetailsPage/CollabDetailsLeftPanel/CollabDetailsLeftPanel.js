import React from "react";
import HomepageNavBar from "../../Homepage1/Homepage1Navbar/HomepageNavBar";
import '../../../Pages/CollabDetails/CollabDetails.css';
import y1 from '../../../Images/y1.png';
import './CollabDetailsLeftPanel.css';
import dot from '../../../Images/dot.png';
import location from '../../../Images/location.png';
import leftarrow from '../../../Images/arrow-circle-left.png';
import rightarrow from '../../../Images/arrow-circle-right.png';

const CollabDetailsLeftPanel = () => {
    
    return (
    <div style={{overflowX: 'hidden', marginTop: 20}}>
      <div className="container border border-grey p-2" style={{overflowX: 'hidden', backgroundColor: "white"}}>
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
                <div className="d-flex" style={{marginLeft: 70}}>
                    <img src={location} alt="" height="16" width="16" style={{marginTop: 5, marginRight: 5}}/>
                    <p className="res-tz">Pakistan (GMT+5)</p>
                </div>
                <p className="offset-md-4 res-time" style={{marginLeft: 120}}>Posted 5 min ago</p>
            </div>
        </div>
        <h3 className="cdlp-heading">Required Positions </h3>
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

        <h3 className="cdlp-heading">Overview</h3>
        <p style={{fontFamily: 'GilroyLight'}}>Are you a passionate guitarist or a creative composer ready to take your
             musical journey to the next level? Look no further! We're a dynamic 
             music band on the lookout for two skilled Guitarists and three talented 
             Composers to join our musical family. If you're ready to make music that
              moves souls and sets stages on fire, this is your chance!</p>

        <h3 className="cdlp-heading">Requirements for Guitarists</h3>
        <ul style={{fontFamily: 'GilroyLight'}}>
            <li>Mastery of the guitar with a deep understanding of various 
                playing styles, including lead, rhythm, and fingerpicking.</li>
            <li>
            Ability to play across different genres, from rock and blues to 
            funk and jazz. Versatility is key!
            </li>
            <li>
            A charismatic performer who can electrify audiences with your presence and guitar skills.
            </li>
            <li>
            You'll be part of a team, so being open to musical collaboration and improvisation is essential.
            </li>
            <li>
            Dedication to regular rehearsals, live performances, and the band's overall vision.
            </li>
            <li>
            Bringing your own unique flair to our music while respecting the band's creative direction.
            </li>
        </ul>

        <h3 className="cdlp-heading">Requirements for Composers</h3>
        <ul style={{fontFamily: 'GilroyLight'}}>
            <li>Proven ability to compose, arrange, and score music across various genres.</li>
            <li>
            A knack for creating original and memorable melodies and harmonies that stand out.
            </li>
            <li>
            Proficiency in one or more musical instruments is a plus.
            </li>
            <li>
            Willingness to collaborate closely with band members to bring compositions to life.
            </li>
            <li>
            Familiarity with music composition software and technology.
            </li>
            <li>
            A passion for pushing boundaries and experimenting with new sounds and musical elements.
            </li>
        </ul>
      </div>  
    </div>

    <div className="container p-2" 
    style={{backgroundColor: "white", marginTop: 20, marginBottom: 80, paddingBottom: 50}}>
        <h3 className="cdlp-heading">Collab images/Videos</h3>
        <div className="d-flex">
            <img className="arrow-style" src={leftarrow} alt="" height="20" width="20"/>
            <div className="grey-box"/>
            <div className="grey-box"/>
            <div className="grey-box"/>
            <div className="grey-box"/>
            <div className="grey-box"/>
            <img className="arrow-style" src={rightarrow} alt="" height="20" width="20"/>
        </div>
    </div>
    </div>

    )
  }
  
  export default CollabDetailsLeftPanel