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
            businessOptions: [{title:'Advertising & Promotion', value:0},{title:'Bill Payment/Supplier Payment',value:1},{title:'Equipment',value:2},{title:'Hiring',value:3},{title:'Inventory/Sourcing',value:4}],
            genderOptions: [{title:'Male' , value:0},{title:'Female' , value:1}]
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