import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import $ from 'jquery/dist/jquery';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';

import Input from '../components/Input'
import Select from '../components/Select'
import SubmitButton from '../components/SubmitButton'
import SliderRange from '../components/SliderRange';
import Logo from '../components/Logo';

class FormContainer extends Component {
    componentDidMount(){
        $('select').selectpicker();
    }
    constructor(props){
        super(props);
        this.state = {
            businessOptions: [{title:'Advertising & Promotion', value:0},{title:'Bill Payment/Supplier Payment',value:1},{title:'Equipment',value:2},{title:'Hiring',value:3},{title:'Inventory/Sourcing',value:4}],
            genderOptions: [{title:'Male' , value:0},{title:'Female' , value:1}],
            valueSlider: 'Please write an essay about your favorite DOM element.'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({valueSlider: event.target.value});
        $("#myRange").prop("value",event.target.value);
    }
    sendInfo(e){
        //e.preventDefault();
        console.log('Name '+ document.getElementsByName("name")[0].value);
    }
    submitForm(e){
        e.preventDefault();
        alert('Hello Hacker! Info has been sent...');
    }
    changeValue() {
        document.getElementById("myRange").oninput  = function(){
            var slider = document.getElementById("myRange");
            var output = document.getElementById("myMoney");
            output.innerHTML = slider.value; // Display the default slider value
          
            // Update the current slider value (each time you drag the slider handle)
            slider.oninput = function() {
              output.innerHTML = "$&nbsp;"+formatMoney(this.value);
            } 
            slider.onchange = function() {
                output.innerHTML = "$&nbsp;"+formatMoney(this.value);
            }

            function formatMoney(amount, decimalCount = 0, decimal = ".", thousands = ".") {
              try {
                decimalCount = Math.abs(decimalCount);
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
                const negativeSign = amount < 0 ? "-" : "";
                let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
                let j = (i.length > 3) ? i.length % 3 : 0;
                return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
              } catch (e) {
                console.log(e)
              }
            };
        };
        // window.setTimeout(function(){
        //     $("#myRange").prop("value", "5500");
        // },5000);
    }
    render() {
        return (
            <form autoComplete="off" className="form" id="form" onSubmit={this.submitForm}>
                <div className="container py-3 mt-3">
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-xl-4 card-special">
                            <div className="card card-outline-secondary border-0">
                                <div className="card-body pt-0">
                                    {/* <input type="text" onChange={this.handleChange} /> */}
                                    
                                    < Logo 
                                        alt={"Lendified Logo"}
                                    />
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
                                    < SliderRange 
                                        name={"myRange"}
                                        title="Amount"
                                        idRange={"myRange"}
                                        inputtype={"range"}
                                        min={500}
                                        max={15000}
                                        step={500}
                                        action={this.changeValue}
                                        defaultValue={1500}
                                        displayValue={"$ 1.500"}
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