import React, { Component } from 'react';
import { Provider } from 'react-redux'; // se necesita para tener inyectar el store a los componentes

import store from './store/store';

import logo from './logo.svg';
import './App.css';

import Counter  from './components/counter/Counter';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
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
          <Counter/>
        </div>
      </Provider>
    );
  }
}

export default App;
