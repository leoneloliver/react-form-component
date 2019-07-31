import React from 'react';

const Input = props => {
    return (
        <div className="form-group">
            <label>{props.title}</label>
            <input 
                className="form-control" 
                id={props.name} 
                name={props.name} 
                type={props.inputtype} 
                {...props}
            />
        </div>
    )
}
export default Input;