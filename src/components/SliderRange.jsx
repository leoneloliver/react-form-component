import React from 'react';

const SliderRange = props => {
    return (
        <div className="form-group">
            
            <div className="form-group my-5" onMouseDown={props.action}>
                <input type="range" min={props.min} max={props.max} defaultValue={props.defaultValue} step={props.step} className="slider" id={props.idRange} />
                <div id="myMoney" className="mt-3 form-control amount text-center slider-display-amount">$&nbsp;1.500</div> 
                <label className="ml-2 text-center">{props.title}</label>
            </div>

        </div>
    )
}
export default SliderRange;