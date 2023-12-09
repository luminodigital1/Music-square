// import React from 'react';

// function SettingsHeader(props) {
//   return (
//     <div className="d-flex post-collab-header" style={{backgroundColor: "white", paddingTop: 0}} >
//         <div class=" offset-md-5">
//             <p className="post-collab-title">{props.heading}</p>
//             </div>
//             <div className="offset-md-3 right-buttons-container">
//                 <button className="border border-grey right-buttons cancel-button">Cancel</button>
//                 <button className="right-buttons post-button">Save</button>
//             </div>
//     </div>
//   );
// }

// export default SettingsHeader;


import React from 'react';

function SettingsHeader(props) {
  return (
    <div className="d-flex post-collab-header" style={{ backgroundColor: "white", paddingTop: 0 }}>
      <div className="col-md-6 offset-md-3 d-flex align-items-center justify-content-center">
        <p className="post-collab-title">{props.heading}</p>
      </div>
      <div className="col-md-2 d-flex justify-content-end align-items-center" style={{marginLeft: 62}}>
        <button className="border border-grey right-buttons cancel-button">Cancel</button>
        <button className="right-buttons post-button" >Save</button>
      </div>
    </div>
  );
}

export default SettingsHeader;
