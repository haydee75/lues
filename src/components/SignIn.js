import React from "react";

import axios from 'axios';

export default class SignInModal extends React.Component {
  state = {
    cities: []
  }

  componentDidMount() {
    axios.get('http://localhost:5050/' + 'cities').then(res => {
      const cities = res.data;
      this.setState({ cities });
    })
  }

  render() {
    const cities = this.state.cities
    let options = [];
    cities.forEach(city => options.push(<option key={city} value={city}>{city}</option>))
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Log In</p>
            <button className="delete" aria-label="close" onClick={() => this.props.closeSignInModalOnClick()}></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Email</label>
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <label className="label">City</label>
              <div className="select">
                <select>
                  {options}
                </select>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-link" onClick={() => this.props.closeSignInModalOnClick()}>
              OK
            </button>
            <button className="button" onClick={() => this.props.closeSignInModalOnClick()}> CANCEL </button>
          </footer>
        </div>
      </div>
    );
  }
}
