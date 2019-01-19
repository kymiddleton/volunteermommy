import React, { Component } from "react";
import * as $ from 'axios';

/* Import Components */
import Input from "../components/Input";
// import Select from "../components/Select";
// import SelectChild from "../components/SelectChild";
import Button from "../components/Button";

class ChildContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            newChild: {
                firstName: " ",
                lastName: " ",
                grade: [],
                teacher: [],
                parent: []
            },
            gradeOptions: [
                        { value: 'PS3 M-F', id: 1},
                        { value: 'PS3 M-TH', id: 2},
                        { value: 'PS3 T, TH', id: 3},
                        { value: 'PS3 T, TH, F', id: 4},
                        { value: 'PS3 M, W, F', id: 5},
                        { value: 'PS3 M, T, TH', id: 6},
                        { value: 'PK4 M-F', id: 7},
                        { value: 'PK4 M, W, F', id: 8},
                        { value: 'PK4 M-TH', id: 9},
                        { value: 'PK4 M-TH', id: 10},
                        { value: 'PK4 M-TH', id: 11},
                        { value: 'PK4 M-TH', id: 12},
                        { value: 'Kindergarten', id: 13},
            ],
            teacherOptions: [],
            parentOptions: [],
        };

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleGradeInput = this.handleGradeInput.bind(this);
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

    handleGradeInput(event) {
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
                {/* <SelectChild
                    title={"Teacher"}
                    name={"Teacher"}
                    options={this.state.TeacherOptions}
                    value={this.state.newChild.teacher}
                    placeholder={"Select Teacher"}
                    handleChange={this.handleTeacherInput}
                    />{" "} */}
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
        