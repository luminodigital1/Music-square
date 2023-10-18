import React, {useState, useRef} from 'react';
// import './Upload.css';

function Title() {

  return (
    <div className="col-md-8 upload-container" style={{marginTop: 20, paddingBottom: 30}}>
      <div className="d-flex">
        <p className="upload-img" >Title Project/Song title </p>
      </div>
      <p className="enhnc-desp">Provide the heart of your project—a compelling title that 
      encapsulates its essence and <br/> draws collaborators in.</p>

        <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className=" col-md-12
        text-center justify-content-center align-items-center" 
        >
            <input type='text' className="border border-grey p-2"/>
        </div>
        </div>
    </div>
  );
}

export default Title;
