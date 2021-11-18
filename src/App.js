import "./App.scss";
import React from "react";
import HomePage from "./components/HomePage.js";
import PresentationPage from "./components/PresentationPage.js";
import NavBar from "./components/NavBar.js";
import SignInModal from "./components/SignIn.js";

import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPresentationPage: false,
      showHomePage: true,
      showSignInModal: false,
    };
  }

  showPresentationPageOnClick() {
    this.setState({ showHomePage: false });
    this.setState({ showPresentationPage: true });
  }

  showHomePageOnClick() {
    this.setState({ showHomePage: true });
    this.setState({ showPresentationPage: false });
  }

  showSignInModalOnClick() {
    this.setState({ showSignInModal: true });
  }
  closeSignInModalOnClick() {
    this.setState({ showSignInModal: false });
  }

  render() {
    const showPresentationPage = this.state.showPresentationPage;
    const showHomePage = this.state.showHomePage;
    const showSignInModal = this.state.showSignInModal;
    let hero;
    let modal;
    if (showHomePage) {
      hero = (
        <HomePage
          showPresentationPageOnClick={() => this.showPresentationPageOnClick()}
        />
      );
    }
    if (showPresentationPage) {
      hero = <PresentationPage />;
    }
    if (showSignInModal) {
      modal = (
        <SignInModal
          closeSignInModalOnClick={() => this.closeSignInModalOnClick()}
        />
      );
    }
    return (
      <div className="App">
        <NavBar
          showPresentationPageOnClick={() => this.showPresentationPageOnClick()}
          showHomePageOnClick={() => this.showHomePageOnClick()}
          showSignInModalOnClick={() => this.showSignInModalOnClick()}
        />
        {hero}
        {modal}
      </div>
    );
  }
}

export default App;
