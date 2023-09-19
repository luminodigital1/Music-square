import React from 'react';
import { Link } from 'react-router-dom';
import InitialDisplay from './HomeScreen/InitialDisplay'
import Screen1 from './Screen1'
import Screen2 from './SignupScreens/Screen2'

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;