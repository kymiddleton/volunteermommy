import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Input } from 'semantic-ui-react'
import { Card, Message } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'


const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    successMessage,
    user,
    toggleAuthenticateStatus
    }) => (
        <Card className="container">
            <form action="/" onSubmit={onSubmit}>
                <h2 className="card-heading">Login</h2>

                {successMessage && <p className="success-message">{successMessage}</p>}
                {errors.summary && <p className="error-message">{errors.summary}</p>}

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
                    <Button type="submit" label="Log in" primary />
                </div>

                <Message>Don't have an account? <Link to={'/signup'}>Create one</Link>.</Message>
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
