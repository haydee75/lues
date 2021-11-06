import React from "react";
import book from "../book.svg";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={book} alt="logo" width="112" height="28" />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a
              className="navbar-item"
              onClick={() => this.props.showHomePageOnClick()}
            >
              Home
            </a>
            <a
              className="navbar-item"
              onClick={() => this.props.showPresentationPageOnClick()}
            >
              Présentation
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Autre</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Presse</a>
                <a className="navbar-item">Contacts</a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item">Remonter un problème</a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-info">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
