import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import reactLogo from './logo-react.svg';
import djangoLogo from './logo-django.svg';
import './App.css';
import RomanNumeralComponent from './RomanNumeralComponent';

class App extends Component {
   

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="React logo" />
          <img src={djangoLogo} className="App-logo" alt="Django logo" />
          <h1 className="App-title">Roman numerals</h1>
        </header>
            <RomanNumeralComponent/>
      </div>
    );
  }
}

export default App;
