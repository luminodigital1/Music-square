import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Screen1 from './Pages/SignupScreens/SignUp/Screen1';
import Screen2 from './Pages/SignupScreens/EmailVerification/Screen2';
import ProfileSetup from './Pages/SignupScreens/ProfileSetup1/ProfileSetup';
import ProfileSetup2 from './Pages/SignupScreens/ProfileSetup2/ProfileSetup2';
import ProfileSetup3 from './Pages/SignupScreens/ProfileSetup3/ProfileSetup3';
import Homepage1 from './Pages/Homepage1/Homepage1';
import Homepage2 from './components/Homepage2';
import FindCollab from './Pages/FindCollab/FindCollab';
import CollabDetails from './Pages/CollabDetails/CollabDetails';
import LandingPage from './Pages/LandingPage/LandingPage';
import CollabStatus from './Pages/CollabStatus/CollabStatus';
import CollabStatusDs from './Pages/CollabStatusDs/CollabStatusDs';
import CollabStatusCs from './Pages/CollabStatusCs/CollabStatusCs';
import Profile from "./Pages/Profile/Profile";
import CollabCompleted from "./Pages/CollabCompleted/CollabCompleted";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<Screen1/>} />
        <Route path="/verify" element={<Screen2/>} />
        <Route path='/profilesetup' element={<ProfileSetup/>}/>
        <Route path='/profilesetup2' element={<ProfileSetup2/>}/>
        <Route path='/profilesetup3' element={<ProfileSetup3/>}/>
        <Route path='/homepage1' element={<Homepage1/>}/>
        <Route path='/homepage2' element={<Homepage2/>}/>
        <Route path='/findcollab' element={<FindCollab/>}/>
        <Route path='/collabdetails' element={<CollabDetails/>}/>
        <Route path="/collabstatus" element={<CollabStatus/>} />
        <Route path="/collabstatusds" element={<CollabStatusDs/>} />
        <Route path="/collabstatuscs" element={<CollabStatusCs/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/collabcompleted" element={<CollabCompleted/>} />
      </Routes>
    </Router>
  );
}

export default App;