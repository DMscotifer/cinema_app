import React, { Component } from 'react';
import NewFilms from './containers/NewFilms.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">UK Opening This Week</h1>
        </header>
        <p className="App-intro">
          <NewFilms />
        </p>
      </div>
    );
  }
}

export default App;
