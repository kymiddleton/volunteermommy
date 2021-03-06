import React, { Component } from "react";
import Auth from '../Utils/Auth';
import * as $ from 'axios';
import { Form } from 'semantic-ui-react';
import '../css/ChildContainer.css';

/* Import Components */
import Input from "../components/Input";
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
                parent: this.props.adultId
            },
            parentOptions: [],

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
        console.log(value, "I think this should be the teacher")
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
        const token = Auth.getToken();
        let childData = this.state.newChild;
        console.log(childData);
        $.post('/api/child', childData, { headers: { Authorization: `bearer ${token}` } })
            // $.post('/api/child', childData)
            .then(res => {
                // trying to prompt confirmation msg to user on submit
                this.setState({ childData: res.data})
                console.log(res);
                console.log(res.data);
            })
    }

    componentDidMount() {
        const token = Auth.getToken();
        $.get('/api/teacher', { headers: { Authorization: `bearer ${token}` } })
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

    render() {
        return (
            <div className="child-wrapper">
                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group inline>
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
                    </Form.Group>
                    <Form.Group>
                        <div className="selection">
                            <SelectTeacher
                                title={"Select Teacher"}
                                name={"Select Teacher"}
                                options={this.state.teacherOptions}
                                value={this.state.newChild.teacher}
                                placeholder={"Select Teacher"}
                                handleChange={this.handleTeacherInput}
                            />{""}
                            {/* End Teacher Selection Field */}
                        </div>
                    </Form.Group>

                    <Form.Group>
                        <div className="submit">
                            <Button
                                action={this.handleFormSubmit}
                                type={"primary"}
                                title={"Submit"}
                                style={buttonStyle}
                            />{""}
                            {/* End newChild Submit */}
                        </div>
                        <div className="clear">
                            <Button
                                action={this.handleClearForm}
                                type={"secondary"}
                                title={"Clear"}
                                style={buttonStyle}
                            />{""}
                            {/* End newChild Clear Form */}
                        </div>
                    </Form.Group>
                </Form>
                {this.state && this.state.childData && 
                <div>{'Details entered successfully'}</div>
                }
            </div>
        );
    
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};


export default ChildContainer;
