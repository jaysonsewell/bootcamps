import React from 'react';
import logo from './logo.svg';
import drawing from './drawing.svg';
import './App.css';
import Main from './components/main.js';

console.log('works');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={drawing} className="App-logo" alt="logo" />
        <Main />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
