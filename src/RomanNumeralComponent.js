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
        return new RegExp("^[IVXLCDM]+$").test(romanNumber);
    }

    isOutOfBoundsRomanNumber(romanNumber) {
        console.log("boundtest")
        console.log(romanNumber)
        console.log(new RegExp("MM[IVXLCDM]").test(romanNumber))
        return new RegExp("MM[IVXLCDM]").test(romanNumber);
    }
    edit(e) {
        var targetVal = e.target.value;

        var valid = this.isRomanNumberValid(targetVal);

        let newState = this.getStateCopy()
        newState.validRomanNumberCharacters = valid;
        newState.outOfBoundsRomanNumber = this.isOutOfBoundsRomanNumber(targetVal),
        newState.hasValue = targetVal.length > 0

        this.setState(newState);
        console.log(this.state)

        clearTimeout(this.timeout);

        if (newState.validRomanNumberCharacters && !newState.outOfBoundsRomanNumber && newState.hasValue)
            this.timeout = setTimeout(function () {
                this.query(targetVal);
            }.bind(this), 500);
    }

    query(romanNumber) {
        axios.post('/api/numberpaircreate/', {
            "romanNumber": romanNumber,
            "arabicNumber": 0
        }).then(response => {
            let newState = this.getStateCopy();
            newState.result = response.data.arabicNumber;
            this.setState(newState)
        })
    }

    getStateCopy() {
        return JSON.parse(JSON.stringify(this.state));
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