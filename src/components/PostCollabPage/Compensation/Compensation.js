import React, {useState, useRef} from 'react';
// import './Collaborators.css';

function Compensation() {
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
        <p className="upload-img" >Compensation</p>
      </div>
      <p className="enhnc-desp">Details about the compensation, whether it's paid, volunteer-based, or negotiable, 
      <br/>fostering clarity and fairness.</p>

        <div className=" col-md-12" style={{ display: 'flex', alignItems: 'center' }}>
            <div className=" col-md-4">
                <p className="type-heading">Type of compensation</p>
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
                    <option value="Revenue Share">Revenue Share</option>
                    <option value="Revenue Share 2">Revenue Share 2</option>
                    <option value="Revenue Share 3">Revenue Share 3</option>
                </select>   
            </div>

            <div className=" col-md-4">
                <p className="type-heading">Revenue share</p>
                    <input
                        className="border border-black rounded col-md-11 type-category"
                        style={{height: 45, borderColor: 'black', marginTop: -10, fontFamily: 'GilroyLight'}}
                        placeholder="Enter Revenue Share"
                        id="position"
                        name="position"
                        // value={formData.timeZone}
                        // value="5%"
                        // onChange={handleSelectPositionChange}
                        // required
                    />
                      
            </div>
        </div>
    </div>
  );
}

export default Compensation;
