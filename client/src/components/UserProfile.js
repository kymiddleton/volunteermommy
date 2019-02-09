import React from 'react';
import Auth from '../Utils/Auth';
import API from '../Utils/APIs';
// import * as $ from 'axios';
import { Segment, Header } from 'semantic-ui-react';
import '../css/userprofile.css';


class UserProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
        }
    }

    /*=== Get User Data from API ===*/ 
    componentDidMount() {
        const userData = Auth.getUserId();
        const token = Auth.getToken();

        API.userById(token, userData)
            .then(json => {
                this.setState({
                    user: json.data,
                })
            });
    }

    /*=== Get Adult Data to match user from API ===*/
    // componentDidMount() {
    //     // const userData = Auth.getUserId();
    //     const token = Auth.getToken();

    //     $.get('/api/adult/volunteer', { headers: { Authorization: `bearer ${token}` } })
    //         .then(json => {
    //             this.setState({
    //                 user: json.data,
    //             })
    //         });
    // }

    // componentDidMount() {
    //     const userData = Auth.getUserId();
    //     const token = Auth.getToken();

    //     API.userById(token, userData)
    //         .then(json => {
    //             this.setState({
    //                 user: json.data,
    //             })
    //         })
    //         // $.get('/api/adult/uservolunteer')
    //         $.get('/api/adult/uservolunteer', { headers: { Authorization: `bearer ${token}` } })
    //         .then(json => {
    //             this.setState({
    //                 user: json.data,
    //             })
    //         });

    // }

    render() {
       console.log(this.state.user);
        
        return (
            <div>
                <div>
                    <Header as='h1'>Account Holder</Header>
                    <div>
                        <div className="account-holder">
                            <Segment.Group>
                                {this.state.user.map(user =>
                                    <Segment color='blue' key={user.id}>
                                        <div className="label">  Name: <span className="name"> {user.name} </span></div>
                                    </Segment>
                                    )}
                            </Segment.Group>

                            <Segment.Group>
                                {this.state.user.map(user =>
                                    <Segment color='blue' key={user.id}>
                                            <div className="label"> Email: <span className="email"> {user.email} </span></div>
                                    </Segment>
                                    )}
                            </Segment.Group>
                        </div>
                    </div>
                </div>

                <div>
                    <Header as='h1'>My Volunteers</Header>
                    <div>
                        {/* <ul>
                            {this.state.user.map(user, adult => (
                            <li key={user.id}>
                                Name: {adult.firstName} | {adult.lastName}
                                Email: {adult.email} | Phone: {adult.phoneNumber}
                            </li>
                            ))};
                        </ul> */}
                    </div>
                </div>
                        <br />
                        <br />

                <div>
                    <Header as='h1'>My Child(ren)</Header>
                    <div>
                        {/* <ul>
                            {this.state.user.map(user, adult => (
                            <li key={user.id}>
                                Name: {adult.firstName} | {adult.lastName}
                                Email: {adult.email} | Phone: {adult.phoneNumber}
                            </li>
                            ))};
                        </ul> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;