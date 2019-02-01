import React from 'react';
import logo from '../../assets/whitelogo.png';
import { Link } from 'react-router-dom';
import './header.css';

const HeaderHome = (props) => (
    <div className="header">
        <img src={logo} alt="whitelogo" className="logo"></img>
        <nav>
            <li>
              <Link to="/login/">Login</Link>
            </li>
            <li>
              <Link to="/signup/">Create Account</Link>
            </li>
          </nav>
    </div>
);

export default HeaderHome;