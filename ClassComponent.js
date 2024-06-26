import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    // Initialize state
    this.state = {
      count: 0,
    };
  }

  // Method to handle button click
  handleIncrement = () => {
    if (this.state.count < 20) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  //Create styles object
  styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  // Render method to display the component
  render() {
    return (
      <div style={this.styles}>
        <h1>Hello, Counter!</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button> <br />
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
