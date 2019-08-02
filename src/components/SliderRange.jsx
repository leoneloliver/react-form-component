import React from 'react';
// import './slider.css';

import styles from './slider.module.css';

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
                    className={`${styles['custom-range']} slider mb-3 `}
                    id={props.idRange} 
                    onMouseDown={props.action} 
                    onPointerDown={props.action}
                />
                
                <div id="myMoney" className={`${styles['slider-display-amount']} amount mt-3 form-control text-center`}>
                    {props.displayValue}
                </div> 
                <label className="text-center">{props.title}</label>
            </div>
        </div>
    )
}
export default SliderRange;