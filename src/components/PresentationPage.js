import React from "react";

class PresentationPage extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-left">
            <h1 className="title">Présentation de Lues</h1>
            <h2 className="subtitle">
              C'est ici qu'il faut insérer la{" "}
              <strong>présentation du projet</strong>, notamment y mettre le
              contenu souhaité.
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default PresentationPage;
