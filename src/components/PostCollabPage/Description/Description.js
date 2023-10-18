import React, {useState, useRef} from 'react';
// import './Collaborators.css';

function Description() {

  return (
    <div className="col-md-8 upload-container" style={{marginTop: 20, paddingBottom: 30}}>
      <div className="d-flex">
        <p className="upload-img" >Description</p>
      </div>
      <p className="enhnc-desp">Unveil the essence of your song through a captivating description, 
      providing a glimpse into <br/> its style, emotions, and themes.</p>

        <div className=" col-md-12" style={{ display: 'flex', alignItems: 'center' }}>
            <input className="border border-grey" style={{height: 200}} />
        </div> 
    </div>
  );
}

export default Description;
