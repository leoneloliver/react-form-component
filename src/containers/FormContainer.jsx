import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery/dist/jquery';

import 'bootstrap-select/dist/css/bootstrap-select.min.css';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';

import Input from '../components/Input'
import Select from '../components/Select'

class FormContainer extends Component {

    componentDidMount(){
        $('select').selectpicker();
    }
    constructor(props){
        super(props);
        this.state = {
            genderOptions: ["Male","Female","Others"]
        };
    }
    
    render() {
        return (
            <div className="container mt-5">
                < Input 
                    inputtype={"text"}
                    title={"Full Name"}
                    name={"name"}
                    placeholder={"Enter your name"}
                />

                < Input 
                    inputtype={"text"}
                    title={"Address"}
                    name={"address"}
                    placeholder={"Enter your address"}
                />

                < Select 
                    title={"Gender"}
                    name={"gender"}
                    placeholder={"Select Gender"}
                    options={this.state.genderOptions}
                />
            </div>
        )
    }
}
export default FormContainer;