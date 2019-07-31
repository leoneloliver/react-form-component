import React from 'react';
import './select.css';

const Select = props => {
    return (
        <div className="form-group select">
            <select 
                className="form-control" 
                id={props.name} 
                name={props.name} 
                type={props.inputtype} 
                value={props.value}
            >
                <option defaultValue selected disabled >
                    {props.placeholder}
                </option>
                {props.options.map(option => {
                    return (
                        <option key={option.value} value={option.value} label={option.title}>
                            {option.title}
                        </option>
                    );
                })}   
            </select>
            <label className="ml-2">{props.title}</label>
        </div>
    )
}
export default Select;