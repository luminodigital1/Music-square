import React, {useState} from "react";

function Languages() {

    return(
        <div className="info-cont">
            <div className="d-flex justify-content-between">
                <p className='bi-title' style={{marginBottom: 0}} >Languages</p>
                <button className="" style={{
                    border:0,
                    color: "#1127E3",
                    fontSize: 14,
                    backgroundColor: "white",
                }}>Add New</button>
            </div>
            <p className='bi-desp' style={{marginBottom: 10}} >List the languages you are proficient in, 
            indicating your level of fluency for each.</p>
            <table className='col-md-3' style={{fontFamily: 'GilroyLight'}}>
                <tr>
                    <td style={{fontSize: 14}}>
                    English
                    </td>
                    <td style={{fontSize: 12, color: '#717171'}}>
                    (Primary)
                    </td>
                </tr>
                <tr>
                    <td style={{fontSize: 14}}>
                    French
                    </td>
                    <td style={{fontSize: 12, color: '#717171'}}>
                    (Secondary)
                    </td>
                </tr>
                <tr>
                    <td style={{fontSize: 14}}>
                    Spanish
                    </td>
                    <td style={{fontSize: 12, color: '#717171'}}>
                    (Secondary)
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Languages