import React from "react";

const Input = (props) => {
  //console.log(props.value);
  return (
    <div className="form-group">
      <label htmlFor={props.newAdult} className="form-label">
        {props.title}
      </label>
      <input 
        id={props.id}
        // firstname={props.firstname}
        // lastname={props.lastName}
        // email={props.email}
        // phonenumber={props.phonenumber}
        name={props.name}
        input={props.input}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        ></input>
    </div>
  );
};

export default Input;