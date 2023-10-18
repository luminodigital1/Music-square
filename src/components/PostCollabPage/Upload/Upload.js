import React, {useState, useRef} from 'react';
import './Upload.css';
import upload from '../../../Images/upload.png';

function Upload() {
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

  return (
    <div className="col-md-8 upload-container">
      <div className="d-flex">
        <p className="upload-img" >Upload Image/Video </p>
        <p className="optional" >(optional)</p>
      </div>
      <p className="enhnc-desp">Enhance your post with visuals that represent your project's creativity and style.</p>

        <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className=" col-md-12
        text-center justify-content-center align-items-center upload-div" 
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
            <img style={{marginTop: 10, marginBottom: 10}} src={upload} height="20" width="20"/>
            <p className="addfiletxt">Max File Size: 1 GB</p>
            <p className="addfiletxt">Supported: jpg, png, avi, mkv, mp4</p>
            <div className="d-flex click-txt">
                <p className="upload">Click to upload</p>
                <p className="dragdrop">or drag and drop</p>
            </div>
            </div>
        </div>
            
            <input
                type="file"
                accept=".jpg, .png, .avi, .mkv, .mp4" // Define accepted file types if needed
                style={{ display: 'none' }} // Hide the file input
                ref={fileInputRef}
                onChange={handleFileChange}
            />
        </div>
    </div>
  );
}

export default Upload;
