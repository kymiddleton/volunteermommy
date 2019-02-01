import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react'
import { Card, Message } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'


const SignUpForm = ({
    onSubmit,
    onChange,
    errors,
    user,
}) => (
        <Card className="container">
            <form action="/" onSubmit={onSubmit}>
                <h2>Sign Up</h2>

                {errors.summary && <p className="error-message">{errors.summary}</p>}

                <div className="field-line">
                    <Input
                        type="text"
                        placeholder="Name"
                        error={errors.name}
                        onChange={onChange}
                        value={user.name}
                    />
                </div>

                <div className="field-line">
                    <Input
                        type="Email"
                        placeholder="Email"
                        error={errors.email}
                        onChange={onChange}
                        value={user.email}
                    />
                </div>

                <div className="field-line">
                    <Input
                        type="Password"
                        placeholder="Password"
                        name="password"
                        onChange={onChange}
                        error={errors.password}
                        value={user.password}
                    />
                </div>

                <div className="button-line">
                    <Button type="submit" label="Create New Account" primary />
                </div>

                <Message>Already have an account? <Link to={'/login'}>Log in</Link></Message>
            </form>
        </Card>
    );

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUpForm;
