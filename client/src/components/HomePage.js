import React, { Component } from 'react';
import Auth from '../Utils/Auth';
// import { Card, Message } from 'semantic-ui-react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
// import './home.css';

class HomePage extends Component {

    componentDidMount() {
        // update authenticated state on logout
        this.props.toggleAuthenticateStatus()
    }

    render() {
        return (
            <Card className="container">
                <CardTitle title="React Application" subtitle="This is the home page." />
                {Auth.isUserAuthenticated() ? (
                    <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardText>
                ) : (
                        <CardText style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</CardText>
                    )}
            </Card>
        );
    }
}

export default HomePage;