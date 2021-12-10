import React from "react";

class ChatPage extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-one-quarter">
                <nav className="panel is-link">
                  <p className="panel-heading">
                    Repositories
                  </p>
                  <div className="panel-block">
                    <p className="control has-icons-left">
                      <input className="input" type="text" placeholder="Search"></input>
                      <span className="icon is-left">
                        <i className="fas fa-search" aria-hidden="true"></i>
                      </span>
                    </p>
                  </div>
                  <a className="panel-block is-active">
                    <span className="panel-icon">
                      <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    bulma
                  </a>
                  <a className="panel-block">
                    <span className="panel-icon">
                      <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    marksheet
                  </a>
                  <a className="panel-block">
                    <span className="panel-icon">
                      <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    minireset.css
                  </a>
                </nav>
              </div>
              <div className="column">
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ChatPage;

