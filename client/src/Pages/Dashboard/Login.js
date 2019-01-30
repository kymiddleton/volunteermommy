import React, { Component } from 'react';
import LoginBox from './LoginBox';
// import RegisterBox from './RegisterBox';
import CreateAccount from './CreateAccount';
import './login.css';


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false
        };
    }

    showLoginBox() {
        this.setState({
            isLoginOpen: true,
            isRegisterOpen: false
        });
    }

    showRegisterBox() {
        this.setState({
            isRegisterOpen: true,
            isLoginOpen: false
        });
    }

    render() {

        return (
            <div className="root-container">

                <div className="box-controller">
                    <div className={"controller" + (
                        this.state.isLoginOpen
                            ? "selected-controller"
                            : ""
                    )}
                        onClick={this.showLoginBox.bind(this)}>

                        <h1>Login</h1>
                    </div>

                    <div className={"controller" + (
                        this.state.isRegisterOpen
                            ? "selected-controller"
                            : ""
                    )}
                        onClick={this.showRegisterBox.bind(this)}>

                        <h1>Register</h1>
                    </div>
                </div>

                
                    <div className="box-container">
                        {this.state.isLoginOpen && <LoginBox />}
                        {this.state.isRegisterOpen && <CreateAccount />}      
                    </div>
            </div>
        )
    }
}

export default Login;