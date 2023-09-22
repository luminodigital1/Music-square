import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialDisplay from './HomeScreen/InitialDisplay';
import Screen1 from './Screen1';
import Screen2 from './SignupScreens/Screen2';
import ProfileSetup from './SignupScreens/ProfileSetup';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<InitialDisplay/>} />
        <Route path="/signup" element={<Screen1/>} />
        <Route path="/verify" element={<Screen2/>} />
        <Route path='/profilesetup' element={<ProfileSetup/>}/>
      </Routes>
    </Router>
  );
}

export default App;