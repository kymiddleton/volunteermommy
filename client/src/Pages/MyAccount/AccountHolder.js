import React from 'react';
import { Form, Input } from 'semantic-ui-react'


const AccountHolder = (props) => (

    <div>
        <h1>Account Holder</h1>
        <Form>
            <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-name'
                    control={Input}
                    label='Name'
                    placeholder='Name'
                />
                <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    placeholder='Email'
                />
            </Form.Group>
        </Form>
    </div>
)

export default AccountHolder; 