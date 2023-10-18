import React from 'react';

function SettingsHeader() {
  return (
    <div className="d-flex post-collab-header" style={{backgroundColor: "white", paddingTop: 0}} >
        <div class=" offset-md-5">
            <p className="post-collab-title">Profile SETTING</p>
            </div>
            <div className="offset-md-3 right-buttons-container">
                <button className="border border-grey right-buttons cancel-button">Cancel</button>
                <button className="right-buttons post-button">Save</button>
            </div>
    </div>
  );
}

export default SettingsHeader;
