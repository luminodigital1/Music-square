import React, {useRef, useState} from "react";
import './ApplyForCollab.css';
import addcircle from '../../Images/add-circle.png';
import musicnote from '../../Images/musicnote.png';
import circleinfo from '../../Images/info-circle.png';
import Popup, {PopupboxManager} from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CustomOffer from "../CustomOffer/CustomOffer";
import { Navigate, useNavigate } from 'react-router-dom';

const ApplyForCollab = ({ closePopup }) => {

  const navigate = useNavigate();

  const navigateToCollabStatus = () => {
    navigate('/collabstatus'); // Navigate to the About page
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
      // <div >
        
        <div style={{overflowX: 'hidden'}}>
          <div className="container" style={{backgroundColor: "white"}}>
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center">
                <p className="pt-2 afc-title">Apply for collab</p>
                <div className="d-flex border border-black rounded offset-md-5
                justify-content-center align-items-center"
                  
                  style={{height: 30}}>
                  <img className="addcircle" src={addcircle} alt ="" height="15" width="15" />
                  <Popup trigger={<button className="btn custom-ofr" onClick={closePopup}>Custom offer</button>}
                  modal 
                  closeOnDocumentClick ={false}
                  >
                    {(closeCO) => <CustomOffer closeCO={closeCO}/>}
                  </Popup>
                  
                  
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
                  <div className="d-flex col-md-4 offset-md-8">
                    <button className=" cancelBtn1" onClick={closePopup}>Cancel</button>
                    <button className="applyBtn1" onClick={navigateToCollabStatus}>Apply</button>
                  </div>
            </div>
          </div>
        </div>
        
    // </div>

    )
  }
  
  export default ApplyForCollab