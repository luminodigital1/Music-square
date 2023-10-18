import React, {useState, useRef} from 'react';
import './Team.css';

function Team() {
    const initialData = [
        { name: 'Sean Kim', value: 'Producer' },
        { name: 'Asad Ali', value: 'Singer' },
        { name: 'Mahnoor Ali', value: 'Guitarist' },
      ];
    
      const [data, setData] = useState(initialData);
      const newRow = { name: `Name`, value: `Role` };
    
      const addRow = () => {
        setData([...data, newRow]);
      };

  return (
    <div className="col-md-8 upload-container" style={{marginTop: 20, paddingBottom: 30}}>
      <div className="d-flex">
        <p className="upload-img" >Team </p>
        <button className=" offset-md-10 add-btn" onClick={addRow}>Add</button>
      </div>
      <p className="enhnc-desp">Discover the talented individuals who are 
      already a part of this creative journey.</p>

        <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className=" col-md-12">
            <table className="table border border-gray team-table">
                <thead>
                <tr className="table-heading">
                    <th className="border border-gray" style={{color:'#717171'}}>Name</th>
                    <th className="border border-gray" style={{color:'#717171'}}>Role</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr className="table-data" key={index}>
                    <td className="border border-gray">{item.name}</td>
                    <td className="border border-gray">{item.value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    </div>
  );
}

export default Team;
