import React, {useState, useRef} from 'react';
import upload from '../../../Images/upload.png';
import pp3 from '../../../Images/pp3.png';

function UploadProfilePic() {
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
    <div className="col-md-12 upload-container" style={{marginTop: 20, marginLeft: 40}}>
      <div className="d-flex">
        <p className="upload-img" >Profile picture </p>
      </div>
      <p className="enhnc-desp">Update your display image </p>

      <div className="d-flex" style={{marginBottom: 10}}>
        <img src={pp3} alt="" height="50px" width="50px"/>
        <p style={{color: '#717171', fontFamily: 'GilroyLight', fontSize: 14, marginRight:10,
        marginLeft: 10, marginTop: 30
    }} >Delete</p>
        <p style={{color: '#fee500', fontFamily: 'GilroyLight', fontSize: 14,marginTop: 30}}>Update</p>
      </div>

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
            <img style={{marginTop: 10}} src={upload} height="20" width="20"/>
            
            
            <div className="d-flex click-txt">
                <p className="upload" style={{marginTop: -20, marginBottom: 0}}>Click to upload</p>
                <p className="dragdrop" style={{marginTop: -20, marginBottom: 0}}>or drag and drop</p>
            </div>
            <p className="addfiletxt">SVG, PNG, JPG or GIF</p>
            <p className="addfiletxt">(Max  400*800 px)</p>
            </div>
        </div>
            
            <input
                type="file"
                accept=".jpg, .png, .svg, .gif" // Define accepted file types if needed
                style={{ display: 'none' }} // Hide the file input
                ref={fileInputRef}
                onChange={handleFileChange}
            />
        </div>
    </div>
  );
}

export default UploadProfilePic;
