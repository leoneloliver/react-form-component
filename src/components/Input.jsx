import React from 'react';

const Input = props => {
    return (
        <div className="form-group">
            
            <input 
                className="form-control" 
                id={props.name} 
                name={props.name} 
                type={props.inputtype} 
                required={props.required}
                {...props}
            />
            <i className={props.icon} aria-hidden="true"></i>
            <label className="ml-2">{props.title}</label>
        </div>
    )
}
export default Input;