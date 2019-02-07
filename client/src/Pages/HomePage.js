import React from 'react';
import Auth from '../Utils/Auth';
import { Card } from 'semantic-ui-react';
import '../css/homepage.css';

class HomePage extends React.Component {

    componentDidMount() {
        // update authenticated state on logout
        this.toggleAuthenticateStatus()
    }

    toggleAuthenticateStatus = () => {
        // check authenticated status and toggle state based on that
        this.setState({ authenticated: Auth.isUserAuthenticated() })
    }

    render() {
        return (
            <Card color='blue' className="ui centered card" >
                <Card.Content>
                    <Card.Header>Volunteer Mommy</Card.Header>
                    {Auth.isUserAuthenticated() ? (
                        <Card.Meta style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</Card.Meta>
                    ) : (
                            <Card.Meta style={{ fontSize: '16px', color: 'red' }}>You are not logged in.</Card.Meta>
                        )}
                </Card.Content>
            </Card >
        )
    }
};

export default HomePage;




// import React from 'react';
// import { Card, CardTitle, CardText } from 'material-ui/Card';
// import Auth from '../Utils/Auth';
// // import { Card, Message } from 'semantic-ui-react';
// import '../css/homepage.css';

// class HomePage extends React.Component {

//     componentDidMount() {
//         // update authenticated state on logout
//         this.toggleAuthenticateStatus()
//     }

//     toggleAuthenticateStatus = () => {
//         // check authenticated status and toggle state based on that
//         this.setState({ authenticated: Auth.isUserAuthenticated() })
//     }

//     render() {
//         return (
//             <Card className="page-container">
//                 <CardTitle title="Volunteer Mommy" subtitle="This is the home page." />
//                 {Auth.isUserAuthenticated() ? (
//                     <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardText>
//                 ) : (
//                         <CardText style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</CardText>
//                     )}
//             </Card>
//         )
//     }
// };

// export default HomePage;


