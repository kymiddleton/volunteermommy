import React, { Component } from "react";

/* Import Components */
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import axios from "axios";

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
    }

    handleLastName(event) {
        let value = event.target.value;
        this.setState(
            prevState => ({
                newAdult: {
                    ...prevState.newAdult,
                    lastName: value
                }
            }),
            () => console.log(this.state.newAdult)
        );
    }

    handleEmail(event) {
        let value = event.target.value;
        this.setState(
            prevState => ({
                newAdult: {
                    ...prevState.newAdult,
                    email: value
                }
            }),
            () => console.log(this.state.newAdult)
        );
    }

    handlePhoneNumber(event) {
        let value = event.target.value;
        this.setState(
            prevState => ({
                newAdult: {
                    ...prevState.newAdult,
                    phoneNumber: value
                }
            }),
            () => console.log(this.state.newAdult)
        );
    }

    handleInput(event) {
        let value = event.target.value;
        let firstName = event.target.firstName;
        let lastName = event.target.lastName;
        let email = event.target.email;
        let phoneNumber = event.target.phoneNumber;
        this.setState(
            prevState => ({
                newAdult: {
                    ...prevState.newAdult,
                    [firstName]: value,
                    [lastName]: value,
                    [email]: value,
                    [phoneNumber]: value,
                }
            }),
            () => console.log(this.state.newAdult)
        );
    }


    handleFormSubmit(event) {
        event.preventDefault();
        let adultData = this.state.newAdult;
    
        axios.post('/api/adult', {adultData})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        
        // fetch("http://example.com", {
        //   method: "POST",
        //   body: JSON.stringify(adultData),
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json"
        //   }
        // }).then(response => {
        //   response.json().then(data => {
        //     console.log("Successful" + data);
        //   });
        // });
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
                    inputType={"text"}
                    firstName={"First Name"}
                    value={this.state.newAdult.firstName}
                    placeholder={"Enter First Name"}
                    handleChange={this.handleInput}
                />{""}
                {/* End newAdult firstName Field*/}
                <Input
                    inputType={"text"}
                    lastName={"First Name"}
                    value={this.state.newAdult.lastName}
                    placeholder={"Enter Last Name"}
                    handleChange={this.handleInput}
                />{""}
                {/* End newAdult lastName Field*/}
                <Input
                    inputType={"text"}
                    email={"Email"}
                    value={this.state.newAdult.email}
                    placeholder={"Enter Valid Email"}
                    handleChange={this.handleInput}
                />{""}
                {/* End newAdult email Field*/}
                <Input
                    inputType={"number"}
                    phoneNumber={"Phone"}
                    value={this.state.newAdult.phoneNumber}
                    placeholder={"Enter Phone Number"}
                    handleChange={this.handleInput}
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