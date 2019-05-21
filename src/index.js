import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import './index.css';

class App extends React.Component {
  state = { lat: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ error: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.error) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    } else if (this.state.error) {
      return <div>Error: {this.state.error}</div>;
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return  (
        <div className='border'>{this.renderContent()}</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
