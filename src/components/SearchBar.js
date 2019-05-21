import React from 'react';

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmmit = event => {
    event.preventDefault();
    this.props.onSubmmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmmit}>
          <div className="field">
            <label>Search images</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => {this.setState({ term: e.target.value })}}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
