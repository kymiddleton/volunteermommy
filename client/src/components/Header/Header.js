import React from 'react';
import logo from '../../assets/whitelogo.png';
// import Card from '../../assets/business-card-contact.png';
// import Calendar from '../../assets/calendar.png';
// import File from '../../assets/file.png';
// import Home from '../../assets/home-icon.png';
// import User from '../../assets/user.png';



const Header = (props) => (
    <div className="header">
        <img src={logo} alt="whitelogo" className="logo"></img>
    </div>
);

export default Header;