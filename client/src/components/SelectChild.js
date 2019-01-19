import React from "react";

const SelectChild = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}> {props.title} </label>
      <select 
        className="form-control"
        id={props.id}
        name={props.name}
        onChange={props.handleChange}
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

export default SelectChild;
