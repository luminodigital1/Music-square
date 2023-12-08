import React, {useState} from 'react';
import StartDiscussionEntity from '../StartDiscussionEntity/StartDiscussionEntity';

function StartDiscussion() {
    const heading = 'Why Solana is not moving towards its ATH??';
    const time = 'Posted 1 hr ago';
    const desp = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget elit auctor, tincidunt Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, casaf ........'
  return (
    <div className=" info-cont" style={{backgroundColor: "#f2f2f2"}}>
        <button className=' p-2' style={{backgroundColor: '#fee500', borderRadius: 4, 
        borderColor: 'transparent', marginBottom: 30}}>Start a discussion</button>
        <StartDiscussionEntity heading={heading} time={time} desp = {desp} />
        <StartDiscussionEntity heading={heading} time={time} desp = {desp} />
        <StartDiscussionEntity heading={heading} time={time} desp = {desp} />
        <StartDiscussionEntity heading={heading} time={time} desp = {desp} />
        <StartDiscussionEntity heading={heading} time={time} desp = {desp} />
        <StartDiscussionEntity heading={heading} time={time} desp = {desp} />
        <StartDiscussionEntity heading={heading} time={time} desp = {desp} />
    </div>
  );
}

export default StartDiscussion;
