import React from 'react';


const SubmitButton = props => {
    return (
        <div className="form-group">
            <div className="form-group row">
                <div className="col-md-12 mt-4">
                    <div className="block-container">
                        <button 
                            id={props.IdName}
                            className="btn btn-success btn-lg btn-block shadow" 
                            type={props.inputtype}
                            onClick={props.action}
                        >
                        {props.name}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SubmitButton;