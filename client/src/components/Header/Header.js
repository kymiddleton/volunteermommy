import React from 'react';
import logo from '../../assets/whitelogo.png';
import { Link } from 'react-router-dom';
import './header.css';

// import Card from '../../assets/business-card-contact.png';
// import Calendar from '../../assets/calendar.png';
// import File from '../../assets/file.png';
// import Home from '../../assets/home-icon.png';
// import User from '../../assets/user.png';



const Header = (props) => (
    <div className="header">
        <img src={logo} alt="whitelogo" className="logo"></img>
        <nav>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/mydetails/">My Details</Link>
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