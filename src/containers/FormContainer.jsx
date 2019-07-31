import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import $ from 'jquery/dist/jquery';
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
            businessOptions: ['Advertising & Promotion', 'Bill Payment/Supplier Payment', 'Equipment', 'Hiring', 'Inventory/Sourcing'],
            genderOptions: ['Male', 'Famale', 'Other']
        };
    }
    render() {
        return (
            <div className="container card p-5">
                < Input 
                    inputtype={"text"}
                    title={"Full Name"}
                    name={"name"}
                    placeholder={"Enter your Name"}
                />
                <hr />
                < Input 
                    inputtype={"text"}
                    title={"Address"}
                    name={"address"}
                    placeholder={"Enter your Address"}
                />
                <hr />
                < Select 
                    title={"Business"}
                    name={"business"}
                    placeholder={"Select Business"}
                    options={this.state.businessOptions}
                />
                <hr />
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