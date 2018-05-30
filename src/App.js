import React, { Component } from 'react';
import Bio from './components/bio';
import Projects from './components/projects';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="image"></div>
          <h1 className="App-title">Hi, I'm Shari.</h1>
          <div className="intro">
            <p className="App-intro">I'm a Front End Web Developer with a passion for creating remarkable user experiences.</p>
            <p className="App-coffee">Oh, and coffee. I love coffee.</p>
          </div>
          <div>
            <Bio />
            <Projects />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
