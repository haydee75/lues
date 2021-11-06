import React from 'react';
import image1 from '../image1.png'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="columns is-vcentered">
            <div className="column">
              <div className="container has-text-left">
                <h1 className="title">Home Section de Lues</h1>
                <h2 className="subtitle">
                  C'est ici qu'il faut insérer la première description de <strong>texte</strong>, notamment y mettre le contenu souhaité.
                </h2>
                <button className="button is-link" onClick={() => this.props.showPresentationPageOnClick()}>Learn More</button>
              </div>
            </div>
            <div className="column is-v">
              <img src={image1} width="512" height="512"/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HomePage

