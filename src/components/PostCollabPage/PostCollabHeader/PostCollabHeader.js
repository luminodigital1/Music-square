import React from 'react';
import './PostCollabHeader.css';

function PostCollabHeader() {
  return (
    <div className="d-flex post-collab-header">
        <div class=" offset-md-5">
            <p className="post-collab-title">Post Collab</p>
            </div>
            <div className="offset-md-3 right-buttons-container">
                <button className="border border-grey right-buttons cancel-button">Cancel</button>
                <button className="right-buttons post-button">Post</button>
            </div>
    </div>
  );
}

export default PostCollabHeader;
