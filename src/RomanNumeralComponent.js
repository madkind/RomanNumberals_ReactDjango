import React, { Component } from 'react';


class RomanNumeralComponent extends React.Component {
    displayName = 'Roman Numerals'
    inputControlClasses = ""

    constructor(props) {
        super(props);
        this.state = { validClass: "" };
    }

    edit(e) {

        var patt = new RegExp("^[IVXLCDM]+$");
        var res = patt.test(e.target.value);
       
        this.setState({
            validClass: res || e.target.value.length == 0 ? "" : "is-invalid"
        });

        console.log(this.state)
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
        </div >;
    }
}


export default RomanNumeralComponent;