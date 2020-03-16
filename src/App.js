import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: 'Your name',
      genderValue: 'Male',
      descriptionValue: 'Description about yourself',
      isAgree: true
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.name === 'isAgree' ? target.checked : target.value;
    this.setState({ [name]: value })
  }

  handleFocus = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: '' });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { nameValue, genderValue, descriptionValue } = this.state;
    console.log('name: ' + nameValue
      + ' gender: ' + genderValue
      + ' description: ' + descriptionValue);
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>
          Name
          <input
            type="text"
            value={this.state.nameValue}
            onChange={(event) => this.handleChange(event)}
            onFocus={(event) => this.handleFocus(event)}
            name="nameValue" />
        </label>
        <label>
          Gender
          <select
            value={this.state.genderValue}
            onChange={(event) => this.handleChange(event)}
            name="genderValue">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>
          Description
          <textarea
            value={this.state.descriptionValue}
            onChange={this.handleChange}
            onFocus={(event) => this.handleFocus(event)} name="descriptionValue" />
        </label>
        <label>
          <input
            name="isAgree"
            type="checkbox"
            checked={this.state.isAgree}
            onChange={(event) => this.handleChange(event)} />
          I have read the terms of conduct
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
