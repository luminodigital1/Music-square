import React, {useState} from 'react';
import './BasicInfo.css';

function BasicInfo() {
    const [selectedTz, setSelectedTz] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [errorMessage1, setErrorMessage1] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');
    const [errorMessage3, setErrorMessage3] = useState('');

    const handleInputChange1 = (event) => {
      const value = event.target.value;
      setFirstName(value);
  
      // Check if the input contains anything other than alphabets
      if (!/^[a-zA-Z]*$/.test(value)) {
        setErrorMessage1('Numbers and special characters are not allowed');
      } else {
        setErrorMessage1('');
      }
    };

    const handleInputChange2 = (event) => {
      const value = event.target.value;
      setLastName(value);
  
      // Check if the input contains anything other than alphabets
      if (!/^[a-zA-Z]*$/.test(value)) {
        setErrorMessage2('Numbers and special characters are not allowed');
      } else {
        setErrorMessage2('');
      }
    };

    const handleInputChange3 = (event) => {
      const value = event.target.value;
      setUserName(value);
  
      // Check if the input contains anything other than alphabets
      if (/\s/.test(value)) {
        setErrorMessage3('Space is not allowed');
      } else {
        setErrorMessage3('');
      }
    };

  const handleSelectTzChange = (event) => {
    setSelectedTz(event.target.value);
  };

  const inputClassName1 = errorMessage1 ? 'error-border' : 'set-hg';
  const inputClassName2 = errorMessage2 ? 'error-border' : 'set-hg';
  const inputClassName3 = errorMessage3 ? 'error-border' : 'set-hg';

  return (
    <div className=" info-cont">
      <p className='bi-title' >Basic Information</p>
      <p className='bi-desp' >Manage your basic information with ease and precision</p>
      <div className='d-flex'>
        <div className='col-md-6' style={{marginRight: 5}}>
            <label className='bi-label'>First Name</label>
            <input className={inputClassName1} type='text'
              value={firstName}
              onChange={handleInputChange1}
            />
            {errorMessage1 && <div style={{ color: 'red', fontSize: 12, fontFamily: 'GilroyLight' }}>{errorMessage1}</div>}
        </div>
        <div className='col-md-6'>
            <label className='bi-label'>Last Name</label>
            <input className={inputClassName2} type='text'
            value={lastName}
            onChange={handleInputChange2}
          />
          {errorMessage2 && <div style={{ color: 'red', fontSize: 12, fontFamily: 'GilroyLight' }}>{errorMessage2}</div>}
    
        </div>
      </div>
      <div className='col-md-6'>
            <label className='bi-label'>Username</label>
            <input className={inputClassName3} type='text'
            value={userName}
            onChange={handleInputChange3}
          />
          {errorMessage3 && <div style={{ color: 'red', fontSize: 12, fontFamily: 'GilroyLight' }}>{errorMessage3}</div>}
    
        </div>
        <div className='col-md-6'>
            <p className='bi-label' style={{marginBottom: 0}}>Time Zone</p>
            <select
                        className="col-md-12 set-hg"
                        // style={{borderColor: '#ccc', color: 'grey'}}
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
