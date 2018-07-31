import React, { Component } from 'react';


class RomanNumeralComponent extends React.Component {
    displayName = 'Roman Numerals'
    
    constructor(props) {
        super(props);
        this.state = { validClass: "" };
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
        }, 500);
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