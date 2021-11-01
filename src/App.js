import logo from './logo.svg'
import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section className="section">
          <div className="container">
            <h1 className="title"> Hello World </h1>
            <p className="subtitle">
              {' '}
              My React app with <strong>Bulma</strong>{' '}
            </p>
          </div>
        </section>
      </header>
    </div>
  )
}

export default App
