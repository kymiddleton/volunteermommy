import React, { Component } from "react";
import API from '../Utils/APIs'
import Auth from '../Utils/Auth';
import { Form } from 'semantic-ui-react';
// import * as $ from 'axios';
import '../css/AdultContainer.css';

/* Import Components */
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

class AdultContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newAdult: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                relationship: [],
            },

            relationshipOptions: ["Parent", "Grandparent", "Relative", "Caregiver"]
        };

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleFirstName(event) {
        event.preventDefault();
        let value = event.target.value;
        this.setState(
            prevState => ({
                newAdult: {
                    ...prevState.newAdult,
                    firstName: value
                }
            }),
            () => console.log(this.state.newAdult)
        );
    };

    handleLastName(event) {
        event.preventDefault();
        let value = event.target.value;
        this.setState(
            prevState => ({
                newAdult: {
                    ...prevState.newAdult,
                    lastName: value
                }
            }),
        );
    }

    handleEmail(event) {
        event.preventDefault();
        let value = event.target.value;
        this.setState(
            prevState => ({
                newAdult: {
                    ...prevState.newAdult,
                    email: value
                }
            }),
        );
    }

    handlePhoneNumber(event) {
        event.preventDefault();
        let value = event.target.value;
        this.setState(
            prevState => ({
                newAdult: {
                    ...prevState.newAdult,
                    phoneNumber: value
                }
            }),
        );
    }

    handleInput(event) {
        event.preventDefault();
        let value = event.target.value;
        let child = event.target.child;
        this.setState(
            prevState => ({
                newAdult: {
                    ...prevState.newAdult,
                    [child]: value
                }
            }),
        );
    }

    // handleFormSubmit(event) {
    //     event.preventDefault();
    //     let adultData = this.state.newAdult;
    //     const self = this;
    //     $.post('/api/adult', adultData)
    //     .then(res => {
    //         self.props.toggleChild(res.data._id);
    //     })
    // }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log(localStorage.getItem('userId'), "this should be user id");
        const token = Auth.getToken();
        let adultData = this.state.newAdult;
        adultData.user = localStorage.getItem('userId');
        const self = this;
        API.adult(token, adultData)
            .then(res => {
                self.props.toggleChild(res.data._id);
            })
    }

    handleClearForm(event) {
        event.preventDefault();
        this.setState({
            newAdult: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                relationship: []
            }
        });
    }

    render() {
        return (
            <div className="wrapper">
                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group inline>
                        <Input
                            type={"text"}
                            firstname={"First Name"}
                            value={this.state.newAdult.firstName}
                            placeholder={"Enter First Name"}
                            handleChange={this.handleFirstName}
                        />{""}
                        {/* End newAdult firstName Field*/}
                        <Input
                            type={"text"}
                            lastName={"Last Name"}
                            value={this.state.newAdult.lastName}
                            placeholder={"Enter Last Name"}
                            handleChange={this.handleLastName}
                        />{""}
                        {/* End newAdult lastName Field*/}
                    {/* </Form.Group> */}

                    {/* <Form.Group inline> */}
                        <Input
                            type={"text"}
                            email={"Email"}
                            value={this.state.newAdult.email}
                            placeholder={"Enter Valid Email"}
                            handleChange={this.handleEmail}
                        />{""}
                        {/* End newAdult email Field*/}
                        <Input
                            type={"text"}
                            phoneNumber={"Phone"}
                            value={this.state.newAdult.phoneNumber}
                            placeholder={"Enter Phone Number"}
                            handleChange={this.handlePhoneNumber}
                        />{""}
                        {/* End newAdult email Field*/}
                    </Form.Group>

                    <Form.Group inline>
                        <div className="selection">
                            <Select
                                title={"Relationship"}
                                name={"Relationship to Enrolled Child(ren)"}
                                options={this.state.relationshipOptions}
                                value={this.state.newAdult.children}
                                placeholder={"Select Relationship"}
                                handleChange={this.handleInput}
                            />
                            {/* End Child Relationship Selection Field */}
                        </div>
                    </Form.Group>

                    <Form.Group className="field-buttons">
                        <div className="submit">
                            <Button
                                action={this.handleFormSubmit}
                                type={"primary"}
                                title={"Submit"}
                                style={buttonStyle}
                            />
                            {/* End newAdult Submit */}
                        </div>
                        <div className="clear">
                            <Button
                                action={this.handleClearForm}
                                type={"secondary"}
                                title={"Clear"}
                                style={buttonStyle}
                            />
                            {/* End newAdult Clear Form */}
                        </div>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};

export default AdultContainer;