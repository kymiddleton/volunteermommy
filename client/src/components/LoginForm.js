import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../css/loginform.css';

const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    successMessage,
    user,
    toggleAuthenticateStatus
}) => (
    <Card className="login-container">
        <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading">Login</h2>

            {successMessage && <p className="success-message">{successMessage}</p>}
            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <div className="field-line-email">
                <TextField
                    floatingLabelText="Enter Email"
                    name="email"
                    errorText={errors.email}
                    onChange={onChange}
                    value={user.email}
                />
            </div>

            <div className="field-line-password">
                <TextField
                    floatingLabelText="Enter Password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    errorText={errors.password}
                    value={user.password}
                />
            </div>

            <div className="button-line">
                <RaisedButton type="submit" label="Log in" primary />
            </div>

            <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
        </form>
    </Card>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};

export default LoginForm;



// import React from 'react';
// // import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Button, Form, Grid, Header, Image, Message, Segment, Input} from 'semantic-ui-react'
// import logo from '../assets/BlackIcon.png';
// // import { Card, CardText } from 'material-ui/Card';
// // import RaisedButton from 'material-ui/RaisedButton';
// // import TextField from 'material-ui/TextField';
// import '../css/loginform.css';

// class LoginForm extends React.Component {

//     onSubmit = (e) => {
//         this.props.Submit()
//     }

//     onChange = (e) => {
//         this.props.onChange()
//     }

//     errors = (e) => {
//         this.props.errorMessage()
//     }

//     successMessage = (e) => {
//         this.props.success()
//     }

//     user = (e) => {
//         this.props.user()
//     }

//     toggleAuthenticateStatus = (e) => {
//         this.props.toggle()
//     }

//     render() {
//         const { values} = this.props;
//         return (
//             <div className='login-form'>
//                 {/*
//                 Heads up! The styles below are necessary for the correct render of this example.
//                 You can do same with CSS, the main idea is that all the elements up to the `Grid`
//                 below must have a height of 100%.
//                 */}
//                 <style>{`body > div, body > div > div, body > div > div > div.login-form { height: 100%; }`}</style>
                
//                 <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
//                     <Grid.Column style={{ maxWidth: 450 }}>
//                         <Header as='h2' color='blue' textAlign='center'>
//                             <Image src={logo} alt='BlackIcon' className="logo"/> Log-in to your account
//                         </Header>
//                         <Form size='large' action="/" onSubmit={this.onSubmit}>

//                             {this.successMessage && <p className="success-message">{this.successMessage}</p>}
//                             {this.errors.summary && <p className="error-message">{this.errors.summary}</p>}

//                             <Segment stacked color='blue'>
//                                 <Input 
//                                 fluid icon='user' 
//                                 iconPosition='left' 
//                                 placeholder='E-mail address'
//                                 type='email'
//                                 errors={this.errorMessage}
//                                 onChange={this.onChange}
//                                 defaultValue={values.email}
//                                 />
//                                 <Input
//                                 fluid icon='lock'
//                                 iconPosition='left'
//                                 placeholder='Password'
//                                 type='password'
//                                 onChange={this.onChange}
//                                 errors={this.errorMessage}
//                                 defaultValue={values.password}
//                                 />
                    
//                                 <Button 
//                                 color='blue'
//                                 fluid size='large'
//                                 type='submit'>
//                                 Login
//                                 </Button>
//                             </Segment>
//                         </Form>

//                         <Message>
//                             New to us?  <Link to={'/signup'}>Create Account</Link>
//                         </Message>
//                     </Grid.Column>
//                 </Grid>
//             </div>
//         )
//     }
// }

// export default LoginForm;



// const LoginForm = ({
//     onSubmit,
//     onChange,
//     errors,
//     successMessage,
//     user,
//     toggleAuthenticateStatus
// }) => (
    
//     <div className='login-form'>
//         {/*
//         Heads up! The styles below are necessary for the correct render of this example.
//         You can do same with CSS, the main idea is that all the elements up to the `Grid`
//         below must have a height of 100%.
//         */}
//         <style>{`body > div, body > div > div, body > div > div > div.login-form { height: 100%; }`}</style>
        
//         <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
//             <Grid.Column style={{ maxWidth: 450 }}>
//                 <Header as='h2' color='blue' textAlign='center'>
//                     <Image src={logo} alt='BlackIcon' className="logo"/> Log-in to your account
//                 </Header>
//                 <Form size='large' action="/" onSubmit={onSubmit}>

//                     {successMessage && <p className="success-message">{successMessage}</p>}
//                     {errors.summary && <p className="error-message">{errors.summary}</p>}

//                     <Segment stacked color='blue'>
//                         <Input 
//                         fluid icon='user' 
//                         iconPosition='left' 
//                         placeholder='E-mail address'
//                         type='email'
//                         errors={errors.email}
//                         onChange={onChange}
//                         value={user.email}
//                         />
//                         <Input
//                         fluid icon='lock'
//                         iconPosition='left'
//                         placeholder='Password'
//                         type='password'
//                         onChange={onChange}
//                         errors={errors.password}
//                         value={user.password}
//                         />
            
//                         <Button 
//                         color='blue'
//                         fluid size='large'
//                         type='submit'>
//                         Login
//                         </Button>
//                     </Segment>
//                 </Form>

//                 <Message>
//                     New to us?  <Link to={'/signup'}>Create Account</Link>
//                 </Message>
//             </Grid.Column>
//         </Grid>
//     </div>
// );
    
// LoginForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired,
//     errors: PropTypes.object.isRequired,
//     successMessage: PropTypes.string.isRequired,
//     user: PropTypes.object.isRequired
// };

// export default LoginForm;