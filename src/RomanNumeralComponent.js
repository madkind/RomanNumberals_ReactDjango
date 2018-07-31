import React, { Component } from 'react';
import axios from 'axios';


class RomanNumeralComponent extends React.Component {
    displayName = 'Roman Numerals'
    
    constructor(props) {
        super(props);
        this.state = {
            validClass: "",
            result: "",
        };
    }

    timeout = null;

    edit(e) {
        var targetVal = e.target.value;

        var patt = new RegExp("^[IVXLCDM]+$");
        var res = patt.test(e.target.value);

        this.setState({
            validClass: res || targetVal === 0 ? "" : "is-invalid"
        });

        clearTimeout(this.timeout);

        this.timeout = setTimeout(function () {
            console.log('Input Value:', targetVal);
            let newState = this.state;
            newState.result = targetVal;
            this.setState(newState)
        }.bind(this), 500);
    }

    query() {
        axios.get('api/MultiInput/GetMultiInputData')
            .then(response => {
                console.log(response)
            })
    }

    render() {
        return <div>
            <input type="text"
                className={"form-control " + this.state.validClass}
                onChange={(e) => this.edit(e)}
            />
            {this.state.validClass.length > 0 &&
            <small id="help" className="text-danger">
                    Please enter a valid roman number!
            </small>}
            <input
                id="tbResult"
                type="text"
                className={"form-control"}
                readOnly="true"
                value={this.state.result}
            />
        </div >;
    }
}


export default RomanNumeralComponent;