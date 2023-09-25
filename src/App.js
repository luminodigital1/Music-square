import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialDisplay from './HomeScreen/InitialDisplay';
import Screen1 from './Screen1';
import Screen2 from './SignupScreens/Screen2';
import ProfileSetup from './SignupScreens/ProfileSetup';
import ProfileSetup2 from './SignupScreens/ProfileSetup2';
import ProfileSetup3 from './SignupScreens/ProfileSetup3';
import Homepage1 from './components/Homepage1';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<InitialDisplay/>} />
        <Route path="/signup" element={<Screen1/>} />
        <Route path="/verify" element={<Screen2/>} />
        <Route path='/profilesetup' element={<ProfileSetup/>}/>
        <Route path='/profilesetup2' element={<ProfileSetup2/>}/>
        <Route path='/profilesetup3' element={<ProfileSetup3/>}/>
        <Route path='/homepage1' element={<Homepage1/>}/>
      </Routes>
    </Router>
  );
}

export default App;