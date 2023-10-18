import React from "react";

function AboutMe() {
    return(
        <div className="info-cont">
            <p className='bi-title' style={{marginBottom: 0}} >About me</p>
            <p className='bi-desp' style={{marginBottom: 10}} >Share your story, interests, and more with others to create meaningful connections</p>
            <div className='col-md-12'>
                <input className='border border-grey set-hg' type='text' style={{height: 150}}/>
            </div>
        </div>
    );
}

export default AboutMe