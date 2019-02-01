import React, { Component } from 'react';
import Auth from '../Utils/Auth';
import { Card, Message } from 'semantic-ui-react'

// import './home.css';

class HomePage extends Component {

    componentDidMount() {
        // update authenticated state on logout
        this.props.toggleAuthenticateStatus()
    }

    render() {
        return (
            <Card className="container">
                <Card title="React Application" subtitle="This is the home page." />
                {Auth.isUserAuthenticated() ? (
                    <Message style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</Message>
                ) : (
                        <Message style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</Message>
                    )}
            </Card>
        );
    }
}

export default HomePage;