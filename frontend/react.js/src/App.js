import React, { Component } from 'react';
import Asanas from './components/quotes/quote.container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Quotes</h2>
        </div>
        <div className="table">
          <Asanas />
        </div>
      </div>
    );
  }
}

export default App;
