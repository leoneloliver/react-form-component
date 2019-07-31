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
            businessOptions: ['Advertising & Promotion', 'Bill Payment/Supplier Payment', 'Equipment', 'Hiring', 'Inventory/Sourcing']
        };
    }
    
    render() {
        return (
            <div className="container mt-5">
                < Input 
                    inputtype={"text"}
                    title={"Full Name"}
                    name={"name"}
                    placeholder={"Enter your Name"}
                />

                < Input 
                    inputtype={"text"}
                    title={"Address"}
                    name={"address"}
                    placeholder={"Enter your Address"}
                />

                < Select 
                    title={"Business"}
                    name={"business"}
                    placeholder={"Select Business"}
                    options={this.state.businessOptions}
                />
            </div>
        )
    }
}
export default FormContainer;