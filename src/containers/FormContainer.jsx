import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import $ from 'jquery/dist/jquery';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';

import Input from '../components/Input'
import Select from '../components/Select'
import SubmitButton from '../components/SubmitButton'

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
    sendInfo(e){
        //alert('Hello Hacker! Info has been sent...');
    }
    submitForm(e){
        e.preventDefault();
        alert('Hello Hacker! Info has been sent...');
    }
    render() {
        return (
            <form autoComplete="off" className="form" id="form" onSubmit={this.submitForm}>
                <div className="container py-3 mt-3">
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-xl-4 card-special">
                            <div className="card card-outline-secondary border-0">
                                <div className="card-body">
                                < Input 
                                    inputtype={"text"}
                                    title={"Full Name"}
                                    name={"name"}
                                    placeholder={"Enter your Name"}
                                    icon={"fa fa-user-o form-icon"}
                                    required={"required"}
                                />
                                < Input 
                                    inputtype={"email"}
                                    title={"Address"}
                                    name={"address"}
                                    placeholder={"Enter your Address"}
                                    icon={"fa fa-envelope-o form-icon"}
                                    required={"required"}
                                />
                                < Select 
                                    title={"Business"}
                                    name={"business"}
                                    placeholder={"Select Business"}
                                    options={this.state.businessOptions}
                                />
                                < Select 
                                    title={"Gender"}
                                    name={"gender"}
                                    placeholder={"Select Gender"}
                                    options={this.state.genderOptions}
                                />
                                < SubmitButton 
                                    name={"Connect"}
                                    idName={"submit"}
                                    inputtype={"submit"}
                                    action={this.sendInfo}
                                />
                                </div>

                            </div>
                            
                        </div>
                    </div>
                
                </div>
            </form>
        )
    }
}
export default FormContainer;