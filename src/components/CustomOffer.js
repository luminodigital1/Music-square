import React, {useRef, useState} from "react";
import './ApplyForCollab.css';
import minus from '../Images/minus.png';
import addcircle from '../Images/add-circle.png';
import musicnote from '../Images/musicnote.png';
import circleinfo from '../Images/info-circle.png';
import './CustomOffer.css';

const CustomOffer = () => {
  const [selectedAT, setSelectedAT] = useState('');

  const handleSelectATChange = (event) => {
    setSelectedAT(event.target.value);
  };

  const [selectedPH, setSelectedPH] = useState('');

  const handleSelectPHChange = (event) => {
    setSelectedPH(event.target.value);
  };

  const [selectedRevisions, setSelectedRevisions] = useState('');

  const handleSelectRevisionsChange = (event) => {
    setSelectedRevisions(event.target.value);
  };

  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileClick = () => {
    fileInputRef.current.click(); // Trigger the file input click event
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...newFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const newFiles = Array.from(e.dataTransfer.files);
    setSelectedFiles([...selectedFiles, ...newFiles]);
  };
  // const fileTypes = ["MP3"];
  // const [file, setFile] = useState(null);
  // const handleChange = (file) => {
  //   setFile(file);
  // };
    
    return (
    <div style={{overflowX: 'hidden', backgroundColor: "white"}}>
      <div className="container">
        <div className="col-md-12">
          <div className="d-flex justify-content-center align-items-center">
            <p className="pt-2 afc-title">Apply for collab</p>
            <div className="d-flex border border-black rounded offset-md-5
             justify-content-center align-items-center"
              
              style={{height: 30}}>
              <img className="addcircle" src={minus} alt ="" height="15" width="15" />
              <button className="btn custom-ofr" >Custom offer</button>
              
            </div>
          </div>
          <input className="border border-gray rounded msg"
          type="text"
          placeholder="Type your message here..."
          />

          <div className="border border-gray rounded p-3 mt-2">

          <div style={{ display: 'flex', alignItems: 'center' }}>
          {selectedFiles.map((file, index) => (
              
                  <div className=" border border-grey rounded col-md-2
                  text-center justify-content-center align-items-center addfilediv" 
                  style={{ marginRight: '20px' }}
                   >
                    <div key={index} className="selected-file">
                   <img style={{marginTop: 10, marginBottom: 10}} src={musicnote} height="20" width="20"/>
                   <p className="addfiletxt">{file.name}</p>
                   </div>
                   </div>
                ))}
            
            <div className=" border border-grey rounded col-md-2
             text-center justify-content-center align-items-center addfilediv" 
            //  style={{ marginRight: '20px' }}
            //  onClick={handleFileClick} 
            >
              <div
                className={`upload-div ${isDragOver ? 'drag-over' : ''}`}
                onClick={handleFileClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                // style={{ marginRight: '10px' }}
              >
              <img style={{marginTop: 10, marginBottom: 10}} src={addcircle} height="20" width="20"/>
              <p className="addfiletxt">Add File</p>
              </div>
            </div>
              
              <input
                  type="file"
                  accept=".pdf, .jpg, .png, .mp3" // Define accepted file types if needed
                  style={{ display: 'none' }} // Hide the file input
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
            </div>
          </div>
            <div className="d-flex">
              <img style={{marginRight: 5}} className="mt-3" src={circleinfo} alt="" height="20" width="20"/>
              <p className=" mt-3 addfiletxt">Attach files or drag and drop files. Max Size: 2 GB</p>
            </div>

            <div className="d-flex text-center align-items-center ">
                <p className="tag-title">Add time</p>
                <div className="">
                    <div className="form-group" style={{marginRight: 20}}>
                        <select
                            className="form-control dropdown select-opt"
                            id="addtime"
                            name="addtime"
                            value={selectedAT}
                            onChange={handleSelectATChange}
                        >
                            <option value="2 days">2 days</option>
                            <option value="3 days">3 days</option>
                            <option value="4 days">4 days</option>
                            <option value="5 days">5 days</option>
                        </select>   
                    </div>
                </div>


                <p className="tag-title">Add Price</p>
                <input className="border border-grey rounded" type="text" value={'100$'}
                style={{width: 100, height: 40, marginTop: -15}}
                ></input>
                <div className="">
                    <div className="form-group" >
                        <select
                            className="form-control border border-grey rounded dropdown select-opt"
                            // style={{borderRadius: 4, 
                            //     // marginTop: 1,
                            //     marginLeft: 2, 
                            //     marginRight: 2}}
                            id="perhr"
                            name="perhr"
                            value={selectedPH}
                            onChange={handleSelectPHChange}
                            placeholder="/hr"
                        >
                            <option value="2 hr">2 hr</option>
                            <option value="3 hr">3 hr</option>
                            <option value="4 hr">4 hr</option>
                            <option value="5 hr">5 hr</option>
                        </select>   
                    </div>
                </div>

                <p className="tag-title" style={{marginLeft: 20}}>Revisions</p>
                <div className="">
                    <div className="form-group" >
                        <select
                            className="form-control dropdown select-opt"
                            id="revesions"
                            name="revesions"
                            value={selectedRevisions}
                            onChange={handleSelectRevisionsChange}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>   
                    </div>
                </div>
            </div>

              <div className="d-flex col-md-4 offset-md-8">
                <button className="cancelBtn1">Cancel</button>
                <button className="applyBtn1">Apply</button>
              </div>
        </div>
      </div>
    </div>

    )
  }
  
  export default CustomOffer