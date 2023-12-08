import React, {useState} from 'react';
import './../../SettingsPage/SettingsPageLeftPanel/SettingsLeftPanel.css';
import './Forum.css'

function Forum() {
    const [activeRow, setActiveRow] = useState(0); // Initially set the first row as active

  const handleRowClick = (index) => {
    setActiveRow(index);
  };

  return (
    <div className="settings-container" style={{width : "40%"}}>
        <h3 className='paneltitle'>Forum</h3>
      <table className="col-md-12" style={{backgroundColor: 'white'}}>
        <tr
        className={activeRow === 0 ? 'active-tab' : ''}
        onClick={() => handleRowClick(0)}
        >
            <td className='p-2'>
            View All
            </td>
        </tr>
        <tr
        className={activeRow === 1 ? 'active-tab' : ''}
        onClick={() => handleRowClick(1)}
        >
            <td className='p-2'>
            General 
            </td>
        </tr>
        <tr
        className={activeRow === 2 ? 'active-tab' : ''}
        onClick={() => handleRowClick(2)}
        >
            <td className='p-2'>
            Ideas
            </td>
        </tr>
        <tr
        className={activeRow === 3 ? 'active-tab' : ''}
        onClick={() => handleRowClick(3)}
        >
            <td className='p-2'>
            User feedback 
            </td>
        </tr>
        <tr
        className={activeRow === 4 ? 'active-tab' : ''}
        onClick={() => handleRowClick(4)}
        >
            <td className='p-2'>
            Gossips
            </td>
        </tr>
      </table>
    </div>
  );
}

export default Forum;
