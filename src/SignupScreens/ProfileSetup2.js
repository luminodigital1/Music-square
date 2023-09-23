import React, { useState } from "react";
import "../Screen1.css"; // Import your CSS or use inline styles
import Logo from "../HomeScreen/Logo";
import "./ProfileSetup2.css";
import "./ProfileSetup.css";
import addcircle from "../Images/add-circle.png";
import { Navigate, useNavigate } from 'react-router-dom';

function ProfileSetup2() {
    const navigate = useNavigate();

     const navigateToPS3 = () => {
       navigate('/profilesetup3'); // Navigate to the About page
    };

    const navigateToPS = () => {
      navigate('/profilesetup'); // Navigate to the About page
   };

  const [selectedSkill, setSelectedSkill] = useState('');
  const [counter, setCounter] = useState(0);

  const handleSelectSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  
  return (

    <div className="row">
      <div className="d-flex">
        <div className="col-md-5 containerLeft">
          <div className="container">
            <h2 className="pl-5 pr-5" style={{fontFamily: 'GilroyBold', marginTop: 80, fontSize: 50,
              marginLeft: 50
          }}>
            Step into a World of Musical Talent and Creativity
            </h2>
            <br/>
            <p className="" style={{fontFamily: 'GilroyLight', marginLeft: 50, 
            marginBottom: 130}}>Embark on a Journey of Musical Discovery: 
            Where Your Talents Shine and Your Music Career Thrives.</p>
          </div>
          <p style={{fontFamily: 'GilroyBold', marginLeft: 60, marginBottom:0}}>Step 4</p>
          <p className="fs-4" style={{fontFamily: 'GilroyBold', marginLeft: 60,  marginBottom:0}}>Key Skills</p>
          <p style={{fontFamily: 'GilroyLight', marginLeft: 60, marginBottom:0}}>
          Highlight your abilities, provide a glimpse of your skills. 
          </p>
          <div className="line-container">
            <div
              className="horizontal-line"
              style={{ backgroundColor: "black" }}
            ></div>
            <div className="horizontal-line"
            style={{ backgroundColor: "black" }}></div>
            <div className="horizontal-line"
            style={{ backgroundColor: "black" }}></div>
            <div className="horizontal-line"
            style={{ backgroundColor: "black" }}></div>
            <div className="horizontal-line"></div>
          </div>
        </div>

        <div className="container" 
        style={{marginTop:100}}>
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center"
            style={{marginLeft: -60}}>
              <Logo/>
            </div>
              <div style={{display: "grid", marginTop: 50}}>
              < div className="row justify-content-center">
                <div className="col-md-7">
                <label htmlFor="skills" className="heading">Skills</label>
                    <select
                        className="form-control"
                        // placeholder="Enter your password"
                        id="skill"
                        name="skill"
                        // value={formData.timeZone}
                        value={selectedSkill}
                        onChange={handleSelectSkillChange}
                        // required
                       >
                       <option value="Select Skill" >Select Skill</option>
                       <option value="Guitarist">Guitarist</option>
                        <option value="Vocalist">Vocalist</option>
                        
                    </select>
                    {Array.from(Array(counter)).map((c, index) => {
                        return <AdditionalComponent/>;
                    })}
                    {/* <button className="add-skill" onClick={()=>setIsClicked(true)}> */}
                    <button className="add-skill" onClick={handleClick}>
                        <img className="add-circle" src={addcircle} alt=""/>
                        Add New
                    </button>
                    <div className="d-flex button-margin">
                            <button className="back" onClick={navigateToPS}>
                                Back
                            </button>
                            <button className="next" onClick={navigateToPS3}>
                                Next
                            </button>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  );
}

function AdditionalComponent() {
    const [selectedSkill, setSelectedSkill] = useState('');

  const handleSelectSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };
    return (
        <select style={{marginTop:10, marginBottom: 10}}
                        className="form-control"
                        // placeholder="Enter your password"
                        id="skill"
                        name="skill"
                        // value={formData.timeZone}
                        value={selectedSkill}
                        onChange={handleSelectSkillChange}
                        // required
                       >
                       <option value="Select Skill" >Select Skill</option>
                       <option value="Guitarist">Guitarist</option>
                        <option value="Vocalist">Vocalist</option>
                        
                    </select>
    );
  }

export default ProfileSetup2;
