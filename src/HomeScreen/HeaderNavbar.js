import { NavLink } from 'react-router-dom'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import Logo from './Logo'
import './Navbar.css'
import Screen1 from '../Screen1'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Logo/>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Community</NavLink>
            </li>
            <li>
              <NavLink to="/projects">About</NavLink>
            </li>
            <li>
              <NavLink to="/about">How it works</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Log in</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <hr color='grey' />
    </div>
  )
}

export default Navbar