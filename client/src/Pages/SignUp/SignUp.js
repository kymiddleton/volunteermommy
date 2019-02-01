import React, { Component } from 'react';
import 'whatwg-fetch';
import { setInStorage, getFromStorage } from '../../Utils/storage';
import axios from 'axios';
// import './home.css';


class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            token: '',
            signUpError: '',
            signUpFirstName: '',
            signUpLastName: '',
            signUpEmail: '',
            signUpPassword: ''
        };

        this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
        this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);

        this.onSignUp = this.onSignUp.bind(this);
    }

    onTextboxChangeSignUpFirstName(e) {
        e.preventDefault();
        this.setState({ signUpFirstName: e.target.value });
    }

    onTextboxChangeSignUpLastName(e) {
        e.preventDefault();
        this.setState({ signUpLastName: e.target.value });
    }

    onTextboxChangeSignUpEmail(e) {
        e.preventDefault();
        this.setState({ signUpEmail: e.target.value });
    }

    onTextboxChangeSignUpPassword(e) {
        e.preventDefault();
        this.setState({ signUpPassword: e.target.value });
    }

    // Grab state, POST request to db
    onSignUp(e) {
        e.preventDefault();
        const { signUpFirstName, signUpLastName, signUpEmail, signUpPassword } = this.state;
        this.setState({ isLoading: true });
        axios.post('/api/signup', {
            firstName: signUpFirstName,
            lastName: signUpLastName,
            email: signUpEmail,
            password: signUpPassword
        }).then(res => {
            console.log(res)
        })

        // fetch('/api/account/signup', {
        //     method: 'POST',
        //     headers: { 'Content-Type' : 'application/json' },
        //     body: JSON.stringify({ 
        //         firstName: signUpFirstName, 
        //         lastName: signUpLastName, 
        //         email: signUpEmail, 
        //         password: signUpPassword }),
        // }).then(res => res.json())
        //     .then(json => {
        //         console.log('json', json);
        //         if (json.success) {
        //             this.setState({
        //                 signUpError: json.message,
        //                 isLoading: false,
        //                 signUpFirstName,
        //                 signUpLastName,
        //                 signUpEmail: '',
        //                 signUpPassword: '',
        //             });
        //         } else {
        //             this.setState({
        //                 signUpError: json.message, 
        //                 isLoading: false,
        //             });
        //         }
        //     });
    }


    render() {
        const {
            isLoading,
            token,
            signUpError,
            signUpFirstName,
            signUpLastName,
            signUpEmail,
            signUpPassword
        } = this.state;

        if (isLoading) {
            return (<div><p>Loading...</p></div>);
        }

        if (!token) {
            return (    
                <div>
                    <div>
                        {(signUpError) ? (<p>{signUpError}</p>) : (null)}
                        <p>Sign Up</p>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={signUpFirstName}
                            onChange={this.onTextboxChangeSignUpFirstName}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={signUpLastName}
                            onChange={this.onTextboxChangeSignUpLastName}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={signUpEmail}
                            onChange={this.onTextboxChangeSignUpEmail}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="Password"
                            value={signUpPassword}
                            onChange={this.onTextboxChangeSignUpPassword}
                        />
                        <br />
                        <button onClick={this.onSignUp}>Sign Up</button>
                    </div>
                </div>
            );
        };
    }
}

export default SignUp;