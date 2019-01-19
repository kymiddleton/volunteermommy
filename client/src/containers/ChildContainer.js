import React, { Component } from "react";
import * as $ from 'axios';

/* Import Components */
import Input from "../components/Input";
// import Select from "../components/Select";
import SelectChild from "../components/SelectChild";
import Button from "../components/Button";

class ChildContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            newChild: {
                firstName: "",
                lastName: "",
                grade: [],
                teacher: [],
                parent: []
            },
            gradeOptions: [
               
            ],
            teacherOptions: [
                { fullName: "Janet Duke", grade: "PS3 M-F" },
                { fullName: "Julia Smith", grade: "PS3 M-TH" },
                { fullName: "Wendy Weaver", grade: "PS3 T, TH" },
                { fullName: "Jennifer Johnson", grade: "PS3 T, TH, F" },
                { fullName: "Lindsay Long", grade: "PS3 M, T, TH" },
                { fullName: "Heather Happy", grade: "PS3 M, W, F" },
                { fullName: "Leslie Lovelace", grade: "PK4 M, W, F" },
                { fullName: "Cindy Carebear", grade: "PK4 M-TH" },
                { fullName: "Jennifer Beamer", grade: "PK4 M-TH" },
                { fullName: "Teri Terrific", grade: "PK4 M-TH" },
                { fullName: "Michelle Reck", grade: "PK4 M-TH" },
                { fullName: "Amy Wilbanks", grade: "Kindergarten" },
            ],
            parentOptions: [],
        };

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleTeacherInput = this.handleTeacherInput.bind(this);
    }

    handleFirstName(event) {
        event.preventDefault();
        let value = event.target.value;
        this.setState(
            prevState => ({
                newChild: {
                    ...prevState.newChild,
                    firstName: value
                }
            }),
            () => console.log(this.state.newChild)
        );
    };

    handleLastName(event) {
        event.preventDefault();
        let value = event.target.value;
        this.setState(
            prevState => ({
                newChild: {
                    ...prevState.newChild,
                    lastName: value
                }
            }),
        );
    }

    handleTeacherInput(event) {
        event.preventDefault();
        let value = event.target.value;
        let grade = event.target.grade;
        this.setState(
            prevState => ({
                newChild: {
                    ...prevState.newChild,
                    [grade]: value
                }
            }),
        );
    }

    handleFormSubmit(event) {
        event.preventDefault();
        let childData = this.state.newChild;
        console.log(childData);
    
        $.post('/api/child', childData)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    handleClearForm(event) {
        event.preventDefault();
        this.setState({
          newChild: {
            firstName: "",
            lastName: "",
            grade: [],
            teacher: [],
            parent: []
          }
        });
    }

    render () {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <Input
                    type={"text"}
                    firstname={"First Name"}
                    value={this.state.newChild.firstName}
                    placeholder={"Enter First Name"}
                    handleChange={this.handleFirstName}
                />{""}
                {/* End newChild firstName Field*/}
                <Input
                    type={"text"}
                    lastName={"Last Name"}
                    value={this.state.newChild.lastName}
                    placeholder={"Enter Last Name"}
                    handleChange={this.handleLastName}
                />{""}
                {/* End newAdult lastName Field*/}
                <SelectChild
                    title={"Teacher"}
                    name={"Teacher"}
                    options={this.state.teacherOptions}
                    value={this.state.newChild.teacher}
                    placeholder={"Select Teacher"}
                    handleChange={this.handleTeacherInput}
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


export default ChildContainer;
        