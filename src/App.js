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
      <div className="my-profile">
        <h1 className="form-title">My Profile</h1>
        <form onSubmit={(event) => this.handleSubmit(event)} className="my-profile-form">
          <label>
            <div className="input-title">Name</div>
            <input
              type="text"
              value={this.state.nameValue}
              onChange={(event) => this.handleChange(event)}
              onFocus={(event) => this.handleFocus(event)}
              name="nameValue"
              className="name-input input" />
          </label>
          <label>
            <div className="input-title">Gender</div>
            <select
              value={this.state.genderValue}
              onChange={(event) => this.handleChange(event)}
              name="genderValue"
              className="gender-input input">
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
      </div>
    );
  }
}

export default App;
