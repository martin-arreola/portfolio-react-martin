
import React, { Component } from "react";

export default class Workflow extends Component {

  constructor() {
    super();
    this.state = {};
    console.log("constructor");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }


  componentDidMount() {
    console.log("componentDidMount");
  }


  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }


  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    console.log("button clicked");
    this.setState({ pageTitle: "Workflow" });
  };

  handleKeyUp = e => {
    this.setState({ inputDetails: e.target.value });
  };

  render() {
    console.log("render");

    return (
      <div>
        <h1>Workflow</h1>

        <input type="text" onKeyUp={e => this.handleKeyUp(e)} />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}