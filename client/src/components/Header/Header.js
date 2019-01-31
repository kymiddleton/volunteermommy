import React from 'react';
import logo from '../../assets/whitelogo.png';
import { Link } from 'react-router-dom';
import './header.css';

const Header = (props) => (
    <div className="header">
        <img src={logo} alt="whitelogo" className="logo"></img>
        <nav>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/myaccount/">My Account</Link>
            </li>
            <li>
              <Link to="/events/">Events</Link>
            </li>
            <li>
              <Link to="/home/">Home</Link>
            </li>
          </nav>
    </div>
);

export default Header;