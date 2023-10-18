import React, {useState} from "react";

function Skills() {
    const [skills, setSkills] = useState([
    { name: 'Guitarist', isEditing: false },
    { name: 'Music Production', isEditing: false },
    { name: 'Luthier', isEditing: false },
    { name: 'Improvisation', isEditing: false },
    { name: 'Composer', isEditing: false },
  ]);

  const toggleEditing = (index) => {
    const updatedSkills = [...skills];
    updatedSkills[index].isEditing = !updatedSkills[index].isEditing;
    setSkills(updatedSkills);
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

    return(
        <div className="info-cont">
            <div className="d-flex justify-content-between">
                <p className='bi-title' style={{marginBottom: 0}} >Skills</p>
                <button className="" style={{
                    border:0,
                    color: "#1127E3",
                    fontSize: 14,
                    backgroundColor: "white",
                }}>Add New</button>
            </div>
            <p className='bi-desp' style={{marginBottom: 10}} >Showcase your skills and expertise</p>
            <div className='col-md-12 border border-grey d-flex' style={{height: 52}} >
                {skills.map((skill, index) => (
                <div key={index} className="m-2" style={{backgroundColor: '#EFEFF0', height: 28,
                fontSize:12, fontFamily:'GilroyLight'
                }}>
                <span onClick={() => toggleEditing(index)}>
                {skill.name}
                </span>
                {skill.isEditing && (
                    <button onClick={() => removeSkill(index)} style={{border:0}}>🗑️</button>
                    )}
                </div>
            ))}
                </div>
        </div>
    );
}

export default Skills