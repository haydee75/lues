import React from "react";
import axios from 'axios';

export default class AutoCompleteInputField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      matches: [],
      query: "",
      selected: false,
      data: []
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  handleKeyPress(event) {
    const { activeIndex, matches } = this.state;
    switch (event.which) {
      case 13: // Enter key
        if (matches.length) {
          this.setState({
            activeIndex: 0,
            matches: [],
            query: matches[activeIndex],
            selected: true
          });
        }
        break;
      case 38: // Up arrow
        this.setState({
          activeIndex: activeIndex >= 1 ? activeIndex - 1 : 0
        });
        break;
      case 40: // Down arrow
        this.setState({
          activeIndex:
            activeIndex < matches.length - 1
              ? activeIndex + 1
              : matches.length - 1
        });
        break;
      default:
        break;
    }
  }

  handleSelection(event, selection) {
    event.preventDefault();
    this.setState({
      activeIndex: 0,
      query: selection,
      matches: [],
      selected: true
    });
  }

  async updateQuery(e) {
    const query = e.target.value;
    this.setState({ query: query });
    const response = await axios.get('http://localhost:5050/' + 'cities', { params: {chars: query}})
    const data = response.data;
    this.setState({
      matches:
        query.length > 0
          ? data.filter(
            item => item.toUpperCase().indexOf(query.toUpperCase()) >= 0
          )
        : [],
      query
    });
  }

  render() {
    const placeholder = "City name";
    const { activeIndex, matches, query } = this.state;
    return (
      <div className="field">
        <label className="label">City</label>
        <div className="control">
          <div className={`dropdown ${matches.length > 0 ? "is-active" : ""}`}>
            <div className="dropdown-trigger">
              <input
                type="text"
                className="input"
                name={name}
                value={query}
                onChange={this.updateQuery}
                onKeyDown={this.handleKeyPress}
                placeholder={placeholder}
                autoComplete="nope"
              />
            </div>
            <div className="dropdown-menu">
              {matches.length > 0 && (
                <div className="dropdown-content">
                  {matches.map((match, index) => (
                    <a
                      className={`dropdown-item ${
                        index === activeIndex ? "is-active" : ""
                      }`}
                      onClick={event => this.handleSelection(event, match)}
                      key={match}
                    >
                      {match}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}