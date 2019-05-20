import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { lat: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ error: err.message })
    );
  }
  render() {
    if (this.state.lat && !this.state.error) {
      return <div><SeasonDisplay lat={this.state.lat}/></div>;
    } else if (this.state.error) {
      return <div>Error: {this.state.error}</div>;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
