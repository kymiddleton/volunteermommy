import React from 'react';
// import React, { Component } from 'react';
import Auth from '../../Utils/Auth';
import logo from '../../assets/whitelogo.png';
import { Link } from 'react-router-dom';
import './header.css';

class HeaderLoggedIn extends React.Component {

    state = {
        authenticated: false
    }

    componentDidMount() {
        // check if user is logged in on refresh
        this.toggleAuthenticateStatus()
    }

    toggleAuthenticateStatus = () => {
        // check authenticated status and toggle state based on that
        this.setState({ authenticated: Auth.isUserAuthenticated() })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <img src={logo} alt="whitelogo" className="logo"></img>

                    <nav>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/logout">Log out</Link>
                        </li>
                        <li>
                            <Link to="/myaccount/">My Account</Link>
                        </li>
                        <li>
                            <Link to="/events/">Events</Link>
                        </li>
                        <li>
                            <Link to="/volunteers/">Volunteers</Link>
                        </li>
                        <li>
                            <Link to="/home/">Home</Link>
                        </li>
                    </nav>
                </div>
            </div>
        );
    }
}

export default HeaderLoggedIn;