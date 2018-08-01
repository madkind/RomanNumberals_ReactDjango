import React, { Component } from 'react';
import axios from 'axios';
import './RomanNumeralComponent.css';

class RomanNumeralComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            validRomanNumberCharacters: true,
            outOfBoundsRomanNumber: false,
            hasValue: false,
            result: "",
        };
    }

    timeout: null;

    isRomanNumberValid(romanNumber) {
        var patt = new RegExp("^[IVXLCDM]+$");
        return patt.test(romanNumber);
    }

    isOutOfBoundsRomanNumber(romanNumber) {
        var patt = new RegExp("MM[IVXLCDM]");
        return patt.test(romanNumber);
    }
    edit(e) {
        var targetVal = e.target.value;

        var valid = this.isRomanNumberValid(targetVal);

        this.setState({
            validRomanNumberCharacters: valid,
            outOfBoundsRomanNumber: this.isOutOfBoundsRomanNumber(targetVal),
            hasValue: targetVal.length>0
        });

        clearTimeout(this.timeout);

        if (this.state.validRomanNumberCharacters && !this.state.outOfBoundsRomanNumber && this.state.hasValue)
            this.timeout = setTimeout(function () {
                this.query(targetVal);
            }.bind(this), 500);
    }

    query(romanNumber) {
        axios.post('/api/numberpaircreate/', {
            "romanNumber": romanNumber,
            "arabicNumber": 0
        }).then(response => {
            let newState = this.state;
            newState.result = response.data.arabicNumber;
            this.setState(newState)
        })
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-4">   </div>
                <div className="col-4">
                    <input type="text"
                        className={(!this.state.validRomanNumberCharacters || this.state.outOfBoundsRomanNumber) ? "is-invalid form-control" : "form-control"}
                        onChange={(e) => this.edit(e)}
                    />
                    {!this.state.validRomanNumberCharacters &&
                        <small id="help" className="text-danger">
                            Please enter a valid roman number!
            </small>}
                    {this.state.outOfBoundsRomanNumber && this.state.validRomanNumberCharacters &&
                        <small id="help" className="text-danger">
                            Please enter a  roman number smaller or equal than MM (2000)!
            </small>}
                    <input
                        id="tbResult"
                        type="text"
                        className={"form-control"}
                        readOnly="true"
                        value={this.state.result}
                    />
                </div>
                <div className="col-4">   </div>
            </div >
 </div>
    }
}


export default RomanNumeralComponent;