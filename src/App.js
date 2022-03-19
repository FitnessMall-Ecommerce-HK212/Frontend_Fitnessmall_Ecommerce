import './App.css';
import { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, React!.</p>
      </header>
    </div>
  );
}
}

export default App;
