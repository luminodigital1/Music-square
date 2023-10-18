import React, {useState} from 'react';
import './SettingsLeftPanel.css';

function SettingsLeftPanel() {
    const [activeRow, setActiveRow] = useState(0); // Initially set the first row as active

  const handleRowClick = (index) => {
    setActiveRow(index);
  };

  return (
    <div className="settings-container">
      <table className="col-md-12" style={{backgroundColor: 'white'}}>
        <tr
        className={activeRow === 0 ? 'active-tab' : ''}
        onClick={() => handleRowClick(0)}
        >
            <td className='p-2'>
            Profile Setting
            </td>
        </tr>
        <tr
        className={activeRow === 1 ? 'active-tab' : ''}
        onClick={() => handleRowClick(1)}
        >
            <td className='p-2'>
            Payment & Revenue 
            </td>
        </tr>
        <tr
        className={activeRow === 2 ? 'active-tab' : ''}
        onClick={() => handleRowClick(2)}
        >
            <td className='p-2'>
            Notification
            </td>
        </tr>
        <tr
        className={activeRow === 3 ? 'active-tab' : ''}
        onClick={() => handleRowClick(3)}
        >
            <td className='p-2'>
            Security & Privacy 
            </td>
        </tr>
        <tr
        className={activeRow === 4 ? 'active-tab' : ''}
        onClick={() => handleRowClick(4)}
        >
            <td className='p-2'>
            KYC Verification
            </td>
        </tr>
      </table>
    </div>
  );
}

export default SettingsLeftPanel;
