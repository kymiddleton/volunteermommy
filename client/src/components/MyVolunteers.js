import React from 'react';
import Auth from '../Utils/Auth';
import API from '../Utils/APIs'
import { Header } from 'semantic-ui-react';
import * as $ from 'axios';
// import '../css/myvolunteers.css';


class MyVolunteers extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
        }
    }

    /*=== Get User Data from API ===*/
    // componentDidMount() {
    //     const userData = Auth.getUserId();
    //     const token = Auth.getToken();

    //     API.userById(token, userData)
    //         .then(json => {
    //             this.setState({
    //                 user: json.data,
    //             })
    //         });
    // }
    

    /*=== Get User Data from API ===*/
    // componentDidMount() {
    //     const userData = Auth.getUserId();
    //     const token = Auth.getToken();

    //     API.userById(token, userData)
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
                <Header as='h1'>My Volunteers</Header>
                
                     <div>
                        <ul>
                            {this.state.user.map(user => (
                            <li key={user.id}>
                                Name: {user.name} | Email: {user.email} 
                            </li>
                            ))};
                        </ul>
                    </div> 
            </div>
        );
    }
}

export default MyVolunteers; 