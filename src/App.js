import './App.scss'
import React from 'react';
import HomePage from './components/HomePage.js'
import PresentationPage from './components/PresentationPage.js'
import NavBar from './components/NavBar.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPresentationPage: false,
      showHomePage: true,
    };
  }

  showPresentationPageOnClick() {
    this.setState({showHomePage: false});
    this.setState({showPresentationPage: true});
  }

  showHomePageOnClick() {
    this.setState({showHomePage: true});
    this.setState({showPresentationPage: false});
  }

  render() {
    const showPresentationPage = this.state.showPresentationPage;
    const showHomePage = this.state.showHomePage;
    let hero;
    if (showHomePage) {
      hero = <HomePage
        showPresentationPageOnClick={() => this.showPresentationPageOnClick()}
      />
    }
    if (showPresentationPage) {
      hero = <PresentationPage/>
    }
    return (
      <div className="App">
        <NavBar
          showPresentationPageOnClick={() => this.showPresentationPageOnClick()}
          showHomePageOnClick={() => this.showHomePageOnClick()}
        />
        {hero}
      </div>
    )
  }
}

export default App
