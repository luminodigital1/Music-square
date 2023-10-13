import React, {useRef, useState} from "react";
import './CollabStatusClbSbm.css';
import addcircle from '../../Images/add-circle.png';
import musicnote from '../../Images/musicnote.png';
import circleinfo from '../../Images/info-circle.png';
import { Navigate, useNavigate } from 'react-router-dom';

const CollabStatusClbSbm = () => {
  const navigate = useNavigate();
  const navigateToCollabStatusCs = () => {
    navigate('/collabstatuscs'); // Navigate to the About page
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
    <div style={{overflowX: 'hidden'}}>
      <div className="container" style={{backgroundColor: "white"}}>
        <div className="col-md-12">
          <div className="d-flex">
            <p className="pt-2 afc-title">Deliver Your Task</p>
            
          </div>
          <input className="border border-gray rounded msg"
          type="text"
          placeholder="Type your message here..."
          />

          <div className="border border-gray rounded p-2 mt-2" style={{marginTop: 10}}>

          <div className="container" style={{ display: 'flex', alignItems: 'center'}}>
          {selectedFiles.map((file, index) => (
              
                  <div className=" border border-grey rounded
                  text-center justify-content-center align-items-center addfilediv" 
                  style={{ marginRight: '15px'}}
                   >
                    <div key={index} className="selected-file">
                   <img style={{marginTop: 10, marginBottom: 10                   
                   }} src={musicnote} height="20" width="20"/>
                   <p className="addfiletxt" style={{width: "fit-content"}} >{file.name}</p>
                   </div>
                   </div>
                ))}
            
            <div className=" border border-gray rounded
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
            <div className="d-flex" width='100%' style={{display: "flex"}}>
              <img style={{marginRight: 5, marginTop: 15}} className="" src={circleinfo} alt="" height="20" width="20"/>
              <p className=" mt-3 addfiletxt">Attach files or drag and drop files. Max Size: 2 GB</p>
            </div>
              <div className="d-flex offset-md-9">
                <button className="applyBtn1 col-md-10 offset-md-2" onClick={navigateToCollabStatusCs}>Submit Collab</button>
              </div>
        </div>
      </div>
    </div>

    )
  }
  
  export default CollabStatusClbSbm