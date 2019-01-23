import React from "react";

const SelectTeacher = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}> {props.title} </label>
      <select 
        className="form-control"
        id={props.id}
        name={props.name}
        onChange={props.handleChange}
        onClick={props.handleClick}
      >
        <option value= " " disabled> {props.placeholder} </option>
          
        
        {props.options.map(option => {
          return (
            <option 
            key={option.fullName} 
            value={option.fullName} 
            label={option.fullName}
            > 
            
            {option.fullName} 
            
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectTeacher;

//add the onClick that calls props of the teacher selection.
//in child container to handle click
//conditional rendering
//ternary

