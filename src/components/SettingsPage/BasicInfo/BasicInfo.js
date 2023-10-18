import React, {useState} from 'react';
import './BasicInfo.css';

function BasicInfo() {
    const [selectedTz, setSelectedTz] = useState('');

  const handleSelectTzChange = (event) => {
    setSelectedTz(event.target.value);
  };
  return (
    <div className=" info-cont">
      <p className='bi-title' >Basic Information</p>
      <p className='bi-desp' >Manage your basic information with ease and precision</p>
      <div className='d-flex'>
        <div className='col-md-6' style={{marginRight: 5}}>
            <label className='bi-label'>First Name</label>
            <input className='border border-grey set-hg' type='text'/>
        </div>
        <div className='col-md-6'>
            <label className='bi-label'>Last Name</label>
            <input className='border border-grey set-hg' type='text'/>
        </div>
      </div>
      <div className='col-md-6'>
            <label className='bi-label'>Username</label>
            <input className='border border-grey set-hg' type='text'/>
        </div>
        <div className='col-md-6'>
            <p className='bi-label' style={{marginBottom: 0}}>Time Zone</p>
            <select
                        className="col-md-12 border-grey set-hg"
                        style={{borderColor: '#ccc', color: 'grey'}}
                        // placeholder="Enter your password"
                        id="tz"
                        name="tz"
                        // value={formData.timeZone}
                        value={selectedTz}
                        onChange={handleSelectTzChange}
                        // required
                    >
                    <option value="Pakistan (GMT+5)">Pakistan (GMT+5)</option>
                    <option value="Pakistan (GMT+5)">Pakistan (GMT+5)</option>
                    <option value="Pakistan (GMT+5)">Pakistan (GMT+5)</option>
                    <option value="Pakistan (GMT+5)">Pakistan (GMT+5)</option>
                </select>
        </div>
    </div>
  );
}

export default BasicInfo;
