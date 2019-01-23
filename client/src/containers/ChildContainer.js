import React, { Component } from "react";
import * as $ from 'axios';

/* Import Components */
import Input from "../components/Input";
// import Select from "../components/Select";
import SelectTeacher from "../components/SelectTeacher";
import Button from "../components/Button";

class ChildContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            newChild: {
                firstName: "",
                lastName: "",
                // grade:
                teacher: "",
                parent: [],
            },
            parentOptions: [

            ],
            newTeacher: {
                fullName: "",
                grade: ""
            },
            teacherOptions: [],
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
        let value = event.target.value;
        this.setState(
            prevState => ({
                newChild: {
                    ...prevState.newChild,
                    teacher: value
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
    //associate teacher with child
    //function onclick teacher option, determine seleted teacher
    //filtering logic, store in variable and send in post request

    componentDidMount () {
        $.get('/api/teacher')
        .then(res => {
            this.setState({
                teacherOptions: res.data
            })
        })
    }

    handleClearForm(event) {
        event.preventDefault();
        this.setState({
          newChild: {
            firstName: "",
            lastName: "",
            teacher: "",
            parent: ""
          },
          newTeacher: {
              fullName: "",
              grade: ""
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
                {/* End newChild lastName Field*/}
                <SelectTeacher
                    title={"Teacher"}
                    name={"Teacher"}
                    options={this.state.teacherOptions}
                    value={this.state.newChild.teacher}
                    placeholder={"Select Teacher"}
                    handleChange={this.handleTeacherInput}
                    />{""}
                {/* End Teacher Selection Field */}
                <Button
                    action={this.handleFormSubmit}
                    type={"primary"}
                    title={"Submit"}
                    style={buttonStyle}
                    />{""}
                {/* End newChild Submit */}
                <Button
                    action={this.handleClearForm}
                    type={"secondary"}
                    title={"Clear"}
                    style={buttonStyle}
                    />{""}
                {/* End newChild Clear Form */}
            </form>
        );
    }
} 

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};


export default ChildContainer;
        