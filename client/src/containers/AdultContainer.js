import React, { Component } from "react";
import * as $ from 'axios';

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
                children: []
            },

            childrenOptions: ["Parent", "Grandparent", "Relative", "Caregiver"]
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

    handleFormSubmit(event) {
        event.preventDefault();
        let adultData = this.state.newAdult;
        console.log(adultData);
    
        $.post('/api/adult', adultData)
        .then(res => {
            console.log(res);
            console.log(res.data);
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
            children: []
          }
        });
    }
    
    render () {
        return (
            <form onSubmit={this.handleFormSubmit} >
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
                    lastName={"First Name"}
                    value={this.state.newAdult.lastName}
                    placeholder={"Enter Last Name"}
                    handleChange={this.handleLastName}
                />{""}
                {/* End newAdult lastName Field*/}
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
                <Select
                    title={"Children"}
                    name={"Relationship to Enrolled Child(ren)"}
                    options={this.state.childrenOptions}
                    value={this.state.newAdult.children}
                    placeholder={"Select Relationship"}
                    handleChange={this.handleInput}
                    />{" "}
                {/* End Child Relationship Selection Field */}
                <Button
                    action={this.handleFormSubmit}
                    type={"primary"}
                    title={"Submit"}
                    style={buttonStyle}
                />{" "}
                {/* End newAdult Submit */}
                <Button
                    action={this.handleClearForm}
                    type={"secondary"}
                    title={"Clear"}
                    style={buttonStyle}
                />{" "}
                {/* End newAdult Clear Form */}
            </form> 
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};

export default AdultContainer;