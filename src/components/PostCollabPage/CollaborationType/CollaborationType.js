import React, {useState, useRef} from 'react';
// import './Collaborators.css';

function CollaborationType() {
  const [selectedCollab, setSelectedCollab] = useState('');

  const handleSelectCollabChange = (event) => {
    setSelectedCollab(event.target.value);
  };

  const [selectedPosition, setSelectedPosition] = useState('');

  const handleSelectPositionChange = (event) => {
    setSelectedPosition(event.target.value);
  };

  return (
    <div className="col-md-8 upload-container" style={{marginTop: 20, paddingBottom: 30}}>
      <div className="d-flex">
        <p className="upload-img" >Collaboration type</p>
      </div>
      <p className="enhnc-desp">Choose the appropriate collaboration type needed.</p>

        <div className=" col-md-12" style={{ display: 'flex', alignItems: 'center' }}>
            <div className=" col-md-4">
                <p className="type-heading">Type of collaboration</p>
                    <select
                        className="dropdown border-grey rounded col-md-11 type-category"
                        style={{}}
                        // placeholder="Enter your password"
                        id="collab"
                        name="collab"
                        // value={formData.timeZone}
                        value={selectedCollab}
                        onChange={handleSelectCollabChange}
                        // required
                    >
                    <option value="Remote">Remote</option>
                    <option value="On-site">On-site</option>
                    <option value="Off-site">Off-site</option>
                </select>   
            </div>

            <div className=" col-md-4">
                <p className="type-heading">Collaboration Mode</p>
                    <select
                        className="dropdown border-grey rounded col-md-11 type-category"
                        style={{borderRadius: 0}}
                        // placeholder="Enter your password"
                        id="position"
                        name="position"
                        // value={formData.timeZone}
                        value={selectedPosition}
                        onChange={handleSelectPositionChange}
                        // required
                    >
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                </select>   
            </div>
        </div>
    </div>
  );
}

export default CollaborationType;
