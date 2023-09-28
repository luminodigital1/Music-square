import React , {useState, state} from "react";
import MultiRangeSlider from "multi-range-slider-react";
import './FindCollabFilterPannel.css';

const FindCollabFilterPannel = () => {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  
    const [selectedTZ, setSelectedTZ] = useState('');

  const handleSelectTZChange = (event) => {
    setSelectedTZ(event.target.value);
  };

  const handleChange = (e) => {
    const element = document.getElementById('collabcb');
    if(element.checked){
        element.style.backgroundColor = '#fee500';
        element.style.borderColor = 'white';
    }
    else{
        element.style.backgroundColor = 'white';
        element.style.borderColor = 'black';
    }
    const element1 = document.getElementById('collabcb1');
    if(element1.checked){
        element1.style.backgroundColor = '#fee500';
        element1.style.borderColor = 'white';
    }
    else{
        element1.style.backgroundColor = 'white';
        element1.style.borderColor = 'black';
    }
    const element2 = document.getElementById('collabcb2');
    if(element2.checked){
        element2.style.backgroundColor = '#fee500';
        element2.style.borderColor = 'white';
    }
    else{
        element2.style.backgroundColor = 'white';
        element2.style.borderColor = 'black';
    }
    // element.style.border = 'none';
  };

  const handlePTChange = (e) => {
    const element = document.getElementById('positiontype');
    if(element.checked){
        element.style.backgroundColor = '#fee500';
        element.style.borderColor = 'white';
    }
    else{
        element.style.backgroundColor = 'white';
        element.style.borderColor = 'black';
    }
    const element1 = document.getElementById('positiontype1');
    if(element1.checked){
        element1.style.backgroundColor = '#fee500';
        element1.style.borderColor = 'white';
    }
    else{
        element1.style.backgroundColor = 'white';
        element1.style.borderColor = 'black';
    }
    const element2 = document.getElementById('positiontype2');
    if(element2.checked){
        element2.style.backgroundColor = '#fee500';
        element2.style.borderColor = 'white';
    }
    else{
        element2.style.backgroundColor = 'white';
        element2.style.borderColor = 'black';
    }
    // element.style.border = 'none';
  };

  const handleCmpChange = (e) => {
    const element = document.getElementById('compensation');
    if(element.checked){
        element.style.backgroundColor = '#fee500';
        element.style.borderColor = 'white';
    }
    else{
        element.style.backgroundColor = 'white';
        element.style.borderColor = 'black';
    }
    const element1 = document.getElementById('compensation1');
    if(element1.checked){
        element1.style.backgroundColor = '#fee500';
        element1.style.borderColor = 'white';
    }
    else{
        element1.style.backgroundColor = 'white';
        element1.style.borderColor = 'black';
    }
    const element2 = document.getElementById('compensation2');
    if(element2.checked){
        element2.style.backgroundColor = '#fee500';
        element2.style.borderColor = 'white';
    }
    else{
        element2.style.backgroundColor = 'white';
        element2.style.borderColor = 'black';
    }
    // element.style.border = 'none';
  };

  const [selectedSROption, setSelectedSROption] = useState('');
  const handleSRChange = (e) => {
    setSelectedSROption(e.target.value);
    const element = document.getElementById('salaryrange');
    const element1 = document.getElementById('salaryrange1');
    const element2= document.getElementById('salaryrange2');
    if(element.checked){
        element.style.backgroundColor = '#fee500';
        element.style.borderColor = '#fee500';
    }
    else{
        element.style.backgroundColor = 'white';
        element.style.borderColor = 'black';
    }
    if(element1.checked){
      element1.style.backgroundColor = '#fee500';
      element1.style.borderColor = '#fee500';
  }
  else{
      element1.style.backgroundColor = 'white';
      element1.style.borderColor = 'black';
  }
  if(element2.checked){
    element2.style.backgroundColor = '#fee500';
    element2.style.borderColor = '#fee500';
}
else{
    element2.style.backgroundColor = 'white';
    element2.style.borderColor = 'black';
}
    
  };

  const [selectedRSOption, setSelectedRSOption] = useState('');
  const handleRSChange = (e) => {
    setSelectedRSOption(e.target.value);
    const element = document.getElementById('revshare');
    const element1 = document.getElementById('revshare1');
    const element2= document.getElementById('revshare2');
    if(element.checked){
        element.style.backgroundColor = '#fee500';
        element.style.borderColor = '#fee500';
    }
    else{
        element.style.backgroundColor = 'white';
        element.style.borderColor = 'black';
    }
    if(element1.checked){
      element1.style.backgroundColor = '#fee500';
      element1.style.borderColor = '#fee500';
  }
  else{
      element1.style.backgroundColor = 'white';
      element1.style.borderColor = 'black';
  }
  if(element2.checked){
    element2.style.backgroundColor = '#fee500';
    element2.style.borderColor = '#fee500';
}
else{
    element2.style.backgroundColor = 'white';
    element2.style.borderColor = 'black';
}
    
  };
    
    return (
    <div className="" style={{overflowX: 'hidden'}}>
      <div className="d-flex" style={{backgroundColor: "white"}}>
        <p className="md-col-1 filter">Filter</p>
        <p className="md-col-1 offset-md-6 clearall">Clear all</p>
      </div>
      <div className="allfilters">
        <p className="sort" style={{paddingBottom: 15, paddingTop: 10}}>Sort By</p>
        <div className="form-group col-md-11 sortbybox" >
               <select style={{fontFamily: 'GilroyLight', fontSize: 14, color: '#717171'}}
                  className="form-control sortbydropdown"
                  
                  // placeholder="Enter your password"
                  id="timezone"
                  name="timezone"
                  // value={formData.timeZone}
                  value={selectedTZ}
                  onChange={handleSelectTZChange}
                  // required
                >
                <option value="Relevancy" >Select Relevancy</option>
                <option value="Relevancy 1">Relevancy 1</option>
                <option value="Relevancy 2">Relevancy 2</option>
                <option value="Relevancy 3">Relevancy 3</option>
                <option value="Relevancy4">Relevancy 4</option>
            </select>       
          </div>
          <hr className="seperator"/>
          <p className="sort">Collab Type</p>
          <div className="form-group form-check" style={{marginLeft: 14}}>
              <input
                type="checkbox"
                className="form-check-input collabtypecb"
                id="collabcb"
                name="collabcb"
                
                // checked={formData.agreeTerms}
                onChange={handleChange}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              Full Time Job
              </label>
            </div>

            <div className="form-group form-check" style={{marginLeft: 14}}>
              <input
                type="checkbox"
                className="form-check-input collabtypecb"
                id="collabcb1"
                name="collabcb1"
                // checked={formData.agreeTerms}
                onChange={handleChange}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              Part-time Job
              </label>
            </div>

            <div className="form-group form-check" style={{marginLeft: 14}}>
              <input
                type="checkbox"
                className="form-check-input collabtypecb"
                id="collabcb2"
                name="collabcb2"
                // checked={formData.agreeTerms}
                onChange={handleChange}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              Freelance
              </label>
            </div>


            <hr className="seperator"/>
          <p className="sort">Position Type</p>
          <div className="form-group form-check" style={{marginLeft: 14}}>
              <input
                type="checkbox"
                className="form-check-input collabtypecb"
                id="positiontype"
                name="positiontype"
                // checked={formData.agreeTerms}
                onChange={handlePTChange}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              Artist
              </label>
            </div>

            <div className="form-group form-check" style={{marginLeft: 14}}>
              <input
                type="checkbox"
                className="form-check-input collabtypecb"
                id="positiontype1"
                name="positiontype1"
                // checked={formData.agreeTerms}
                onChange={handlePTChange}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              Instrumental
              </label>
            </div>

            <div className="form-group form-check" style={{marginLeft: 14}}>
              <input
                type="checkbox"
                className="form-check-input collabtypecb"
                id="positiontype2"
                name="positiontype2"
                // checked={formData.agreeTerms}
                onChange={handlePTChange}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              Non-Artist
              </label>
            </div>

            <hr className="seperator"/>
          <p className="sort">Compensation</p>
          <div className="form-group form-check" style={{marginLeft: 14}}>
              <input
                type="checkbox"
                className="form-check-input collabtypecb"
                id="compensation"
                name="compensation"
                // checked={formData.agreeTerms}
                onChange={handleCmpChange}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              Fixed Payment
              </label>
            </div>

            <div className="form-group form-check" style={{marginLeft: 14}}>
              <input
                type="checkbox"
                className="form-check-input collabtypecb"
                id="compensation1"
                name="compensation1"
                // checked={formData.agreeTerms}
                onChange={handleCmpChange}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              Revenue Share
              </label>
            </div>

            <div className="form-group form-check" style={{marginLeft: 14}}>
              <input
                type="checkbox"
                className="form-check-input collabtypecb"
                id="compensation2"
                name="compensation2"
                // checked={formData.agreeTerms}
                onChange={handleCmpChange}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              Hourly Payment
              </label>
            </div>

            <hr className="seperator"/>
          <p className="sort">Salary Range</p>
          <div className="form-group form-check" style={{marginLeft: 14}}>
              <input
                type="radio"
                className="form-check-input collabtypecb"
                id="salaryrange"
                name="salaryrange"
                value="Under $1000"
                // checked={formData.agreeTerms}
                onChange={handleSRChange}
                checked={selectedSROption === 'Under $1000'}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              Under $1000
              </label>
            </div>

            <div className="form-group form-check" style={{marginLeft: 14}}>
            <input
                type="radio"
                className="form-check-input collabtypecb"
                id="salaryrange1"
                name="salaryrange"
                value="$1000 - $10,000"
                // checked={formData.agreeTerms}
                onChange={handleSRChange}
                checked={selectedSROption === '$1000 - $10,000'}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              $1000 - $10,000
              </label>
            </div>

            <div className="form-group form-check" style={{marginLeft: 14}}>
            <input
                type="radio"
                className="form-check-input collabtypecb"
                id="salaryrange2"
                name="salaryrange"
                value="Custom"
                // checked={formData.agreeTerms}
                onChange={handleSRChange}
                checked={selectedSROption === 'Custom'}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              Custom
              </label>
            </div>

      <MultiRangeSlider
      style={{border: 'none', boxShadow: 'none'}}
      min={0}
			max={100}
			step={5}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
      ruler = "false"
      barInnerColor="#fee500"
      thumbLeftColor="#fee500"
      thumbRightColor="#fee500"
      
    />






<hr className="seperator"/>
          <p className="sort">Revenue Share Range</p>
          <div className="form-group form-check" style={{marginLeft: 14}}>
              <input
                type="radio"
                className="form-check-input collabtypecb"
                id="revshare"
                name="revshare"
                value="Under 40%"
                // checked={formData.agreeTerms}
                onChange={handleRSChange}
                checked={selectedRSOption === 'Under 40%'}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              Under 40%
              </label>
            </div>

            <div className="form-group form-check" style={{marginLeft: 14}}>
            <input
                type="radio"
                className="form-check-input collabtypecb"
                id="revshare1"
                name="revshare"
                value="40% - 70%"
                // checked={formData.agreeTerms}
                onChange={handleRSChange}
                checked={selectedRSOption === '40% - 70%'}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              40% - 70%
              </label>
            </div>

            <div className="form-group form-check" style={{marginLeft: 14}}>
            <input
                type="radio"
                className="form-check-input collabtypecb"
                id="revshare2"
                name="revshare"
                value="Custom"
                // checked={formData.agreeTerms}
                onChange={handleRSChange}
                checked={selectedRSOption === 'Custom'}
                style={{backgroundColor: "white", borderColor: "black", paddingRight: -10,
                boxShadow: "none"
            }}
              />
              <label className="form-check-label" htmlFor="agreeTerms"
              style={{fontFamily: 'GilroyLight', color : '#717171', fontSize: 14}}>
              Custom
              </label>
            </div>

      <MultiRangeSlider
      style={{border: 'none', boxShadow: 'none'}}
      min={0}
			max={100}
			step={5}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
      ruler = "false"
      barInnerColor="#fee500"
      thumbLeftColor="#fee500"
      thumbRightColor="#fee500"
      
    />




        </div>          
            
      </div>
    // </div>

    )
  }
  
  export default FindCollabFilterPannel