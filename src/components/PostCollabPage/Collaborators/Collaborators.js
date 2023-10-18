import React, {useState, useRef} from 'react';
import './Collaborators.css';

function Collaborators() {
  const [selectedCollab, setSelectedCollab] = useState('');

  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

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
        <p className="upload-img" >Collaborators required</p>
        <div className="offset-md-7">
            <button className=" offset-md-4 add-btn" onClick={handleClick}>Add</button>
        </div>
      </div>
      <p className="enhnc-desp">Indicate the number of talented 
      collaborators you're seeking to join this exciting project.</p>

        <div className=" col-md-12" style={{ display: 'flex', alignItems: 'center' }}>
            <div className=" col-md-4">
                <p className="type-heading">Type of collaborator</p>
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
                    <option value="Instrumentals">Instrumentals</option>
                    <option value="Guitarist">Guitarist</option>
                    <option value="Singer">Singer</option>
                    <option value="Producer">Producer</option>
                </select>   
            </div>

            <div className=" col-md-4">
                <p className="type-heading">Position</p>
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
                    <option value="Instrumentals">Instrumentals</option>
                    <option value="Guitarist">Guitarist</option>
                    <option value="Singer">Singer</option>
                    <option value="Producer">Producer</option>
                </select>   
            </div>

            <div className=" col-md-4">
                <p className="type-heading">Number of Positions </p>
                <input type='number' className="border border-black rounded col-md-11 type-category" 
                placeholder='Number of Positions'
                style={{height: 45, marginTop: -10}} />
            </div>
        </div>
        {Array.from(Array(counter)).map((c, index) => {
                        return <AdditionalComponent/>;
        })}
    </div>
  );
}

function AdditionalComponent() {
    const [selectedCollab, setSelectedCollab] = useState('');

  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const handleSelectCollabChange = (event) => {
    setSelectedCollab(event.target.value);
  };

  const [selectedPosition, setSelectedPosition] = useState('');

  const handleSelectPositionChange = (event) => {
    setSelectedPosition(event.target.value);
  };
    return(
        <div className=" col-md-12" style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
        <div className=" col-md-4">
            <p className="type-heading">Type of collaborator</p>
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
                <option value="Instrumentals">Instrumentals</option>
                <option value="Guitarist">Guitarist</option>
                <option value="Singer">Singer</option>
                <option value="Producer">Producer</option>
            </select>   
        </div>

        <div className=" col-md-4">
            <p className="type-heading">Position</p>
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
                <option value="Instrumentals">Instrumentals</option>
                <option value="Guitarist">Guitarist</option>
                <option value="Singer">Singer</option>
                <option value="Producer">Producer</option>
            </select>   
        </div>

        <div className=" col-md-4">
            <p className="type-heading">Number of Positions </p>
            <input type='number' className="border border-black rounded col-md-11 type-category" 
            placeholder='Number of Positions'
            style={{height: 45, marginTop: -10}} />
        </div>
    </div>
    );
  }

export default Collaborators;
