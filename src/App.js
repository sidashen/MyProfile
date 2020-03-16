import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Your name' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleFocus = () => {
    this.setState({ value: '' });
  }

  render() {
    return (
      <label>
        Name
        <input type="text" value={this.state.value} onChange={() => this.handleChange()} onFocus={this.handleFocus} />
      </label>
    );
  }
}

export default App;
