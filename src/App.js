// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import InitialDisplay from './HomeScreen/InitialDisplay'
// import Screen1 from './SignupScreens/Screen1'
// import Screen2 from './SignupScreens/Screen2'

// const App = () => {
//   return (
//     //to display screen 1
//     // <Screen1/>

//     //to display screen 2
//     // <Screen2/>

//     //to display main screen
//     // <BrowserRouter>
//     //   <InitialDisplay/>
//     // </BrowserRouter>

// <Router>
//   <Routes>
//   <Route path="/" exact component={InitialDisplay} />
//   <Route path="/about" component={Screen1} />
//   </Routes>
// </Router>

//   )
// }

// export default App



// // import Navigation from './Navigation';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import InitialDisplay from './HomeScreen/InitialDisplay'
// // import Screen1 from './SignupScreens/Screen1'
// // import Screen2 from './SignupScreens/Screen2'

// // const App = () => {
// //   return (
// //     <Router>
// //       <div>
// //         <Navigation />
// //         <Routes>
// //         <Route path="/" exact component={InitialDisplay} />
// //         <Route path="/about" component={Screen1} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }
// // export default App



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialDisplay from './HomeScreen/InitialDisplay';
import Screen1 from './Screen1';
import Screen2 from './SignupScreens/Screen2';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<InitialDisplay/>} />
        <Route path="/signup" element={<Screen1/>} />
        <Route path="/verify" element={<Screen2/>} />
      </Routes>
    </Router>
  );
}

export default App;