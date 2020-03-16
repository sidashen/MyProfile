import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: 'Your name',
      genderValue: 'Male',
      descriptionValue: 'Description about yourself'
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: target.value })
  }

  handleFocus = () => this.setState({ nameValue: '' });

  render() {
    return (
      <div>
        <label>
          Name
          <input type="text" value={this.state.nameValue} onChange={(event) => this.handleChange(event)}
            onFocus={() => this.handleFocus()} name='nameValue' />
        </label>
        <label>
          Gender
          <select value={this.state.genderValue} onChange={(event) => this.handleChange(event)} name='genderValue'>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </label>
      </div>
    );
  }
}

export default App;
