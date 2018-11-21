import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    count: 1
  };

  componentDidMount() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
    }, 0);
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
    }, 0);
    console.log(this.state.count);
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
