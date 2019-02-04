import React from 'react';
// import React, { Component } from 'react';
// import HeaderHome from './components/Header/HeaderHome.js';
// import HeaderLoggedIn from './components/Header/HeaderLoggedIn.js';
import Auth from '../../Utils/Auth';
// import logo from '../../assets/whitelogo.png';
import { Link } from 'react-router-dom';
import './header.css';


class LoggedInHeader extends React.Component {

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
                <div className="top-bar">
                    <div className="top-bar-left">
                        <Link to="/">React App</Link>
                    </div>

                    {this.state.authenticated ? (
                    
                    <div className="top-bar-right">
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/logout">Log out</Link>
                    </div>

                        ) : (

                    <div className="top-bar-right">
                        <Link to="/login">Log in</Link>
                        <Link to="/signup">Sign up</Link>
                    </div>

                    )}

                </div>
            </div>
        );
    }
}

export default LoggedInHeader;