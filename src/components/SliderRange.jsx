import React from 'react';
import './slider.css';

const SliderRange = props => {
    return (
        <div className="form-group">
            <div className="form-group my-2">
                <input 
                    type="range" 
                    min={props.min} 
                    max={props.max} 
                    defaultValue={props.defaultValue} 
                    step={props.step} 
                    className="slider mb-3 custom-range" 
                    id={props.idRange} 
                    onMouseDown={props.action} 
                    onPointerDown={props.action}
                />
                <div id="myMoney" className="mt-3 form-control amount text-center slider-display-amount">
                    {props.displayValue}
                </div> 
                <label className="text-center">{props.title}</label>
            </div>
        </div>
    )
}
export default SliderRange;